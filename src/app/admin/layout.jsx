import Image from "next/image";
import SideBar from "../components/adminComponent/SideBar";
import { assets } from "../Assets/assets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <>
      <div className="sm:flex hidden ">
        <ToastContainer theme="dark"/>
        <SideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12  ">
            <h3 className="font-medium text-[#5d4d90]">admin panel</h3>
            <Image src={assets.profile_icon} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
// test adding blog
