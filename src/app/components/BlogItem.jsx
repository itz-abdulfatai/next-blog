import Image from "next/image";
import React from "react";
import { assets, blog_data } from "../Assets/assets";
import Link from "next/link";

const BlogItem = ({ title, description, category, image, _id, authorImg, author, date }) => {
  return (
    <div className=" max-w-[330px] sm:max-w-[300px] bg-white border  hover:shadow-lg shadow-[#5d4d90] border-[#f9f5ff]">
      <Link href={`/blogs/${_id}`}>
        <Image src={image} alt="" width={400} height={500} className=" " />
      </Link>

      <p className=" ml-5 mt-3 px-1 inline-block text-[#5d4d90] text-sm">
        {category}
      </p>
      <div className="p-5 ">
        <Link href={`/blogs/${_id}`}>
          <h5 className=" mb-2 text-lg font-medium tracking-tight text-[#5d4d90]">
            {title}
          </h5>
        </Link>
        <p className=" mb-3 text-sm tracking-tight text-[#a890de] "
        dangerouslySetInnerHTML={{__html:description.slice(0,120)}}
        ></p>
        <div className="flex justify-start items-stretch gap-2">
          <div className=" flex justify-center items-center">

          <Image alt='' src={authorImg} width={40} height={40}/>
          </div>
          <div className=" flex flex-col justify-between text-[#5d4d90]">

          <p className=" ">{author}</p>
          {/* <p className=" text-[#a890de] ">{date.toLocaleDateString('en-CA')}</p> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogItem;
