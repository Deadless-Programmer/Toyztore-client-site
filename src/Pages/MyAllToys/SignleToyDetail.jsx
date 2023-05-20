import React from "react";
import { HiStar } from "react-icons/hi";
const SignleToyDetail = ({ SingleData }) => {
  const {
    _id,
    name,
    picture,
    sellerName,
    sellerEmail,
    SubCategory,
    Price,
    Rating,
    Quantity,
    Description,
  } = SingleData;
  return (
    <tr>
      {/* <th>1</th>  */}
      <td>
        <button className="  hover:bg-green-400 bg-pink-600 p-2 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{SubCategory}</td>
      <td>{Price}</td>
      <td>
        <img src={picture} className="h-24 w-24 rounded-full" alt="" />
      </td>
      <td>{sellerEmail}</td>
      <td >
       <p className="flex items-center">{Rating} <HiStar className="text-orange-400 text-lg"></HiStar></p>
      </td>
      <td>{Quantity}</td>
      <td>
        {" "}
        <p className="w-40  overflow-auto">{Description}</p>{" "}
      </td>
      <td>
        <button className="bg-pink-500 border-0 hover:bg-green-600 p-2 rounded-sm text-white">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default SignleToyDetail;
