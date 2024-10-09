import React from "react";

const SubsTableItem = ({ email, mongoId, date, deleteEmail }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left ">
      <th
        className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap"
        scope="row"
      >
        {email || "no email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td className="px-6 py-4 cursor-pointer" onClick={()=> {deleteEmail(mongoId)}}>x</td>
    </tr>
  );
};

export default SubsTableItem;
