import React from 'react'
import {useLocation,useNavigate} from "react-router-dom"
import Template from './Template';

const TagPage = () => {
  console.log("TagPage")
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replace("-"," ");
  return (
    <div>
      <Template tag={tag}/>
    </div>
  )
}

export default TagPage