import { assets } from "@/app/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[#f9f5ff]  ">
      <Link href='/' className="px-2 sm:pl-14 py-3   ">
        <Image width={120} alt=" " src={assets.logo} />
      </Link>
      <div className="w-16 sm:w-72 h-[100vh] flex-1 relative py-12 ">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href={'/admin/addBlog'} className="flex items-center  gap-3 font-medium px-3 py-2 bg-white shadow-lg">
            <Image alt="" src={assets.add_icon} width={28} />
            <p>add blog</p>
          </Link>
          <Link href={'/admin/blogList'} className="flex items-center  gap-3 font-medium px-3 py-2 bg-white shadow-lg mt-5">
            <Image alt="" src={assets.blog_icon} width={28} />
            <p>blog list</p>
          </Link>
          <Link href={'/admin/subscriptions'} className="flex items-center  gap-3 font-medium px-3 py-2 bg-white shadow-lg mt-5">
            <Image alt="" src={assets.email_icon} width={28} />
            <p>subscription</p>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default SideBar;
