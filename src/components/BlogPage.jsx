import { React, useState, useContext, useEffect } from 'react'
import { baseUrl } from '../baseUrl';
import { useLocation ,useNavigate} from "react-router-dom"
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Header from './Header';

const BlogPage = () => {
  console.log("BlogPage Called")
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  const url =`${baseUrl}get-blog?blogId=${blogId}`;

  const fetchSearchedBlogs = async () => {
    console.log("Inside fetch fucn")
    setLoading(true);
    try {
      const data = await fetch(url);
      const response = await data.json();
      console.log("response",response)
      setBlog(response.blog);
      setRelatedBlogs(response.relatedBlogs);
    }
    catch (error) {
      console.log("Something has been wrong at Blogpage.jsx");
      setBlog([]);
      setRelatedBlogs({});
    }
  }


  useEffect(()=>{
    console.log("called inside useEffect");
    fetchSearchedBlogs();
  },[]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <Card data={blog} />
      </div>
      <h2>Related Blogs</h2>
      {relatedBlogs?.map((blog) => (
        <Card data={blog} />
      ))}
    </div>
  )
}

export default BlogPage