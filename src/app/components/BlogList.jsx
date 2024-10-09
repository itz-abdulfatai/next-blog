import { useEffect, useState } from "react";
import { blog_data } from "../Assets/assets";
import BlogItem from "./BlogItem";
import axios from "axios";

function BlogList() {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([])
  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
    console.log(response.data.blogs)
  }

  useEffect(()=> {
    fetchBlogs()
  }, [])

  return (
    <div className="">
      <div className=" flex justify-center gap-4 sm:gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu == "All"
              ? "bg-[#a890de] text-white py-1 px-4 px-sm rounded-full"
              : "text-[#5d4d90]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`${
            menu == "Technology"
              ? "bg-[#a890de] text-white py-1 px-4 px-sm rounded-full"
              : "text-[#5d4d90]"
          }`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`${
            menu == "Startup"
              ? "bg-[#a890de] text-white py-1 px-4 px-sm rounded-full"
              : "text-[#5d4d90]"
          }`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`${
            menu == "Lifestyle"
              ? "bg-[#a890de] text-white py-1 px-4 px-sm rounded-full"
              : "text-[#5d4d90]"
          }`}
        >
          Lifestyle
        </button>
      </div>
      <div className=" flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-25 px-5">
        {blogs.filter((item) => menu == "All" ? true : item.category == menu
        ).map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
