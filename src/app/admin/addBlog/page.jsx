"use client";

import { assets } from "@/app/Assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bonnett",
    authorImg: "/author_img.png",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bonnett",
        authorImg: "/author_img.png",
      });
    } else {
      toast.error("Error");
    }
  };
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12 sm:pl-16 " onSubmit={onSubmitHandler}>
        <p className="text-xl"> upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={20}
            alt=""
            className=" mt-4"
          />
        </label>
        <input
          type="file"
          className=""
          onChange={(e) => setImage(e.target.files[0])}
          id="image"
          hidden
          required
        />
        <p className=" text-xl mt-4 capitalize">blog title</p>
        <input
          name="title"
          value={data.title}
          onChange={onChangeHandler}
          type="text"
          placeholder="type here"
          required
          className=" w-full sm:w-[500px] mt-4 px-4  py-3 border"
        />

        <p className=" text-xl mt-4 capitalize">blog description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="write content here"
          required
          className=" w-full sm:w-[500px] mt-4 px-4  py-3 border"
          rows={6}
        />
        <p className=" text-xl mt-4 ">blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          id=""
          className=" w-40 mx-4 py-3 mt-4 border text-gray-500 "
        >
          <option value="Startup">Startup</option>
          <option value="Techonlogy">Techonlogy</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className=" mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default Page;
