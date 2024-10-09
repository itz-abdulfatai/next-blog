import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };
  return (
    <div className=" py-5 px-5 md:px-12 lg:px-28 bg-[#f9f5ff] ">
      <div className=" flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className=" w-[130px] sm:w-auto "
        />

        <button className=" flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-solid border-[#5d4d90] shadow  text-[#5d4d90] rounded-full">
          Get started <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className=" text-center my-8 *:">
        <h1 className=" text-3xl sm:text-5xl font-medium text-[#5d4d90]">
          Latest Blogs
        </h1>
        <p className=" text-[#a890de] mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          nesciunt corporis quas odit corrupti exercitationem.
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] bg-white scale-75 sm:scale-100 mx-auto mt-10 border rounded-full border-[#a890de] shadow text-[#5d4d90] p-2"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="enter your email"
            className="bg-transparent w-full outline-none flex-1 px-4 text-sm"
          />
          <button
            type="submit"
            className="border border-[#a890de] capitalize py-2 px-2 sm:px-4 flex-none rounded-full active:bg-[#5d4d90] active:text-white whitespace-nowrap"
          >
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
