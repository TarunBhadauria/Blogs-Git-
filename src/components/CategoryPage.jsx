import React from 'react'
import Template from './Template';
import {useLocation} from "react-router-dom"

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replace("-"," ");
  return (
    <div>
      <Template category={category}/>
    </div>
  )
}

export default CategoryPage