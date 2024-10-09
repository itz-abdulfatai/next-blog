"use client";

import SubsTableItem from "@/app/components/adminComponent/subsTableItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };
  useEffect(() => {
    fetchEmails();
  }, []);

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete('/api/email' , {
      params: {
        id: mongoId
      }
    })
    if (response.data.success) {
      toast.success(response.data.msg)
      fetchEmails()
    } else {
      toast.error(error)
    }
  }
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16  ">
      <h1 className="text-[#5d4d90]">All subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th className=" px-6 py-3 " scope="col">
                email subscription
              </th>
              <th className=" px-6 py-3 hidden sm:block " scope="col">
                date
              </th>
              <th className=" px-6 py-3 " scope="col">
                action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {emails.map((item, index)=> {
              return <SubsTableItem key={index} mongoId={item._id} email={item.email} date={item.date} deleteEmail={deleteEmail}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
