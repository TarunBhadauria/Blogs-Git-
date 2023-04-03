import {React,useContext} from 'react'
import { NavLink } from "react-router-dom"
import { AppContext } from '../context/AppContext';

const Card = (props) => {
    const { title, author, date, category, content, tags, id } = props.data;
    const {loader} = useContext(AppContext);
    console.log("Data",props.data)
    return (
        <div>
            {
               loader?(<p>Loading...</p>):
               props.data?
               <div className="w-11/12 max-w-2xl mx-auto">
            <NavLink to={`/blog/${id}`}>
                <p className="font-bold text-lg">{title}</p>
            </NavLink>
            <p className="text-sm my-1">
                By <span className="italic">{author}</span> on{" "}
                {/* <NavLink to={`/categories/${category.replaceAll(" ","-")}`}>
                    <span className="font-semibold underline cursor-pointer">{category}</span>
                </NavLink> */}
                {console.log("category",category)}
            </p>
            <p className="text-sm">Posted On {date}</p>
            <p className="mt-4 mb-2">{content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
                {tags?.map((tag, index) => (

                    <NavLink to={`/tags/${tag}`}>
                        <span
                            key={index}
                            className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag.replaceAll(" ","-")}`}</span>

                    </NavLink>


                ))}
            </div>
        </div>:
        <p>No Blogs Found</p>
            }
        </div>
    )
}

export default Card