import React from "react"
import Back from "../common/Back"
import Recent from "../home/recent/Recent"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <Recent />
        </div>
        <span className="text-sm flex justify-center text-green-400">For more blog click<NavLink to='/home'> <span className='text-green-900  '><FaArrowRightLong /> </span></NavLink></span>
      </section>
    </>
  )
}

export default Blog
