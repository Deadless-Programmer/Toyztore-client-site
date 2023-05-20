import React from "react";
import { Link } from "react-router-dom";

const SignleToy = ({ data }) => {
  console.log(data);
  const { _id, sellerName, Description, Price, Quantity,Rating,SubCategory,toyName,sellerEmail,userEmail  } = data;
  console.log(_id)
  return (
    <tr>
      {/* <th>1</th>  */}
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{SubCategory}</td>
      <td>{Price}</td>
      <td>{Quantity}</td>
      <td> <Link to={`/productDetails/${_id}`}><button className="bg-pink-500 border-0 hover:bg-green-600 p-2 rounded-sm text-white" >View Details</button></Link> </td>
    </tr>
  );
};

export default SignleToy;
