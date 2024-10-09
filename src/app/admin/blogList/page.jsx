'use client'

import BlogTableItem from "@/app/components/adminComponent/BlogTableItem"
import axios, { Axios } from "axios"
import { Suspense, useEffect, useState } from "react"
import { toast } from "react-toastify"

const Page = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)

  }

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete('/api/blog', {
      params: {
        id:mongoId
      }
    })
    toast.success(response.data.msg)
    fetchBlogs();

  }




  useEffect(()=> {
    fetchBlogs()

  }, [])




  return (
    <div className=" flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">

      <h1 className=" text-[#5d4d90]">All blogs</h1>
      <div className="relative h-[80vh] max-w-[880px] overflow-x-scroll mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className=" text-sm  text-gray-700 text-left uppercase bg-[#f9f5ff]">
            <tr>
              <th scope="col" className=" hidden sm:block px-6 py-3 ">
                Author name
              </th>
              <th scope="col" className="  px-6 py-3 ">
                blog title
              </th>
              {/* <th scope="col" className="  px-6 py-3 ">
                blog date
              </th> */}
              <th scope="col" className="  px-6 py-3 ">
                date
              </th>
              <th scope="col" className="  px-6 py-3 ">
                action
              </th>
            </tr>
            


          </thead>
          <Suspense fallback='loading...'>

          <tbody>

            {
              blogs.map((item, index) => (
                
                <BlogTableItem key={index} mongoId = {item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>

              ))
            }

          </tbody>
          </Suspense>
        </table>
          
      </div>
      
    </div>
  )
}

export default Page