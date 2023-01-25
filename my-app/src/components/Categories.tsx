import React from 'react'
import { useWhyDidYouUpdate } from 'ahooks';



const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые"
]



type CategoriesProps = {
  value: number,
  onChangeCategory: (i: number)=> void //
}




const Categories: React.FC<CategoriesProps> = React.memo(({value, onChangeCategory}) =>{

    const onClickCategory = (i) => onChangeCategory(i)

    useWhyDidYouUpdate('Categories', {value, onChangeCategory});
    return(
      <div className="categories">
        <ul>
            {categories.map((item, i) => <li key={i} onClick={()=>onClickCategory(i)} className={value === i ? 'active' : ''}>{item}</li>)} 
        </ul>
      </div>
    )
  })
  
  export default Categories;