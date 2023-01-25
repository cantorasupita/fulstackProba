import axios from 'axios';
import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';


const FullPizza: React.FC = () =>{

    const [pizzas, setPizzas] = React.useState<{
        imageUrl:string,
        title: string,
        price: number
    }>()
    const {id} = useParams();
    const navigate = useNavigate()

    React.useEffect(()=>{
        
        fetchPizza()
    },[])

    async function fetchPizza(){
        try{
            const {data} = await axios.get(`https://6331674a3ea4956cfb5cd950.mockapi.io/items/${id}`)
            console.log(data)
            setPizzas(data)
        }catch(e){
            alert('REGECT')
            navigate('/')
            console.log(e)
        }finally{
            // po liubomu se indeplineshte
            //setLoading(false)
         }

    }

    if(!pizzas){
        return <>ЗАГРУЗКА.....</>
    }
    return(
        <div className="container container--cart">
            <h1>FullPizza ${id}</h1>
            <h1>{pizzas.title}</h1>
            <img src={pizzas.imageUrl} alt={pizzas.title}/>
            <h1>{pizzas.price}</h1>
        </div>
    )
    
}

export default FullPizza;