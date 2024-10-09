import Image from "next/image"
import { assets } from "../Assets/assets"

const Footer = () => {
  return (
    <div className=" flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5 items-center bg-[#a890de]">
        <Image src={assets.logo} width={120} alt=""  className="drop-shadow-lg "/>
        <p className=" text-sm text-white">All rights reserved.  Copyright &copy;Abdulfatai </p>
        <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={40} />
            <Image src={assets.twitter_icon} alt="" width={40} />
            <Image src={assets.googleplus_icon} alt="" width={40} />
        </div>
        

    </div>
  )
}

export default Footer