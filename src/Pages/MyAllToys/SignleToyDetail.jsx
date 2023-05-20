import React from "react";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const SignleToyDetail = ({ SingleData, handleDelete }) => {
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


  // const handleDelete = id=>{
  //     console.log(id)
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then((result) => {
  //       if (result.isConfirmed) {
          
  //         fetch(`http://localhost:5000/signgleToys/${id}`,{
  //           method:"DELETE"
  //         })
  //         .then(res=>res.json())
  //         .then(data=>{
  //           console.log(data)
  //           if(data.deletedCount >0){
  //             Swal.fire(
  //           'Deleted!',
  //           'Your toy has been deleted.',
  //           'success'
  //         )
  //           }
  //         })
  //       }
  //     })
  // }
  return (
    <tr>
      {/* <th>1</th>  */}
      <td>
        <button onClick={()=>handleDelete(_id)} className="  hover:bg-green-400 bg-pink-600 p-2 rounded-3xl">
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
        <Link to={`/updateToy/${_id}`}><button className="bg-pink-500 border-0 hover:bg-green-600 p-2 rounded-sm text-white">
          Update
        </button></Link>
      </td>
    </tr>
  );
};

export default SignleToyDetail;
