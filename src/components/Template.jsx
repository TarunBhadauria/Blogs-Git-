import React from 'react'
import Header from './Header'
import Pagination from './Pagination'
import { useNavigate} from "react-router-dom"
import Blogs from "../components/Blogs"

const Template = (props) => {
  const navigate = useNavigate();
  console.log("Template")
  return (
    <div>
        {/* <Header/> */}
        <div className='mt-8'>
            <button onClick={navigate(-1)}>
                back
            </button>
            {
                props.tag?<h2>Blogs Tagged <span>#</span>{props.tag}</h2>:
                <h2>Blogs On {props.category}</h2>
            }
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Template