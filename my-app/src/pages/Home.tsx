import React from 'react';

import Pagination from '../components/Pagination';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock'

////bagam i URL parametri
import { useNavigate } from 'react-router-dom';
//qs
import qs from 'qs'
//axios
//import axios from 'axios'
//skeleton
import Skeleton from '../components/PizzaBlock/Skeleton';
//context
import { SearchContext } from '../App';
//redux
import {useSelector, useDispatch} from 'react-redux';
//AC
import {setCategoryId, setCurrentPage, setSearchValue} from '../redux/slices/filterSlice'
import { setItems, fetchPizzasThunk,  } from '../redux/slices/pizzaSlice'
//selectors
import { selectPizzaData } from '../redux/slices/pizzaSlice';
import { selectFilter } from '../redux/slices/filterSlice';
//sort list
//import {sortList} from '../App';







const Home = () => {

    const dispatch = useDispatch()//dispatch
    const {categoryId, sort, currentPage, searchValue} = useSelector(s=>s.filter)//sort , categ, pagin
    const {items, status} = useSelector(selectPizzaData)///items pizza





    //-------------------------------------
    const onClickCategory = React.useCallback((i) =>{
      dispatch(setCategoryId(i))
    },[])

    //---------------------------------------------------
    const onChangePage = (number) =>{
      dispatch(setCurrentPage(number))
    }


    const getPizzas = async () => {
        //setLoading(true)
        //sortirovca  <asc : desc>
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProperty.replace('-','');
        //filtr category
        const category = categoryId > 0 ? `&category=${categoryId}` : '';
        //poisc
        const search = searchValue ? `&search=${searchValue}` : '';
        //axios
        try{
            dispatch(fetchPizzasThunk({currentPage, category, sortBy, order, search}))
        }catch(e){
            alert('Ошибка при получении пицц ')
            console.log('ERRPR', e)
        }finally 
            {// po liubomu se indeplineshte
            //setLoading(false)
        }

    }



  /// фачем запрос ку парам дин редакс
  //------------------------------------------------------------------------------------------
    React.useEffect(() => {
        window.scrollTo(0, 0);
        getPizzas();
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);


 


    //Poisk na storone frontenda-------------------------------------------------
    //pizza items-
    const pizzas = items.filter((obj)=>{
      if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true
      }
      return false
    }).map((obj)=><PizzaBlock {...obj} key={obj.id}/>)
    //skeleton
    const skeletons = [...new Array(6)].map((_, i)=><Skeleton  key={i}/>)



    //-------------------------------------------------------------------------------
    return (
        <div className="container">
 
            <div className="content__top">  
                <Categories 
                    value={categoryId} 
                    onChangeCategory={onClickCategory}/>
                <Sort />
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {status === 'error' && (<h1>EROOR NA SERVERE</h1>)}
                {//loader Sceleton
                    status === 'loading'
                        ?  skeletons 
                        :  pizzas
                }
            </div>

            <Pagination 
              currentPage={currentPage}
              onChangePage={onChangePage}/>
   

        </div>
    )
}

export default Home;