import React from 'react'
import Blogs from './Blogs'
import Header from './Header'
import Pagination from './Pagination'

const Home = () => {
  return (
    <div>
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  )
}

export default Home