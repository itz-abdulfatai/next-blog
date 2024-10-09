"use client";
import { assets, blog_data } from "@/app/Assets/assets";
import Footer from "@/app/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



const Page = ({ params }) => {
  
  const fetchBlogData = async () => {
   const response = await axios.get(`/api/blog`, {
    params: {
      id: params.id
    }

   })
   setData(response.data)
  };
  const [data, setData] = useState(null);


  useEffect(() => {
    fetchBlogData();
  }); 

  return data ? (
    <>
      <div className="bg-[#f9f5ff] py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={'/'}>
          
          <Image
            alt="Logo"
            src={assets.logo}
            width={180}
            className="w-[130px] sm:w-auto"
          />
            </Link>
            <button className=" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-solid border-[#5d4d90] shadow  text-[#5d4d90] rounded-full">
          Get started <Image src={assets.arrow} alt="" />
        </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto text-[#5d4d90]">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt="Author"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto text-[#a890de]">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image src={data.image} alt="Blog" className="border-4 border-white " width={1280} height={720}/>
        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
        <div className="my-24">
          <p className=" text-black font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt=""/>
            <Image src={assets.twitter_icon} width={50} alt=""/>
            <Image src={assets.googleplus_icon} width={50} alt=""/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <></>
  );
};

export default Page;
