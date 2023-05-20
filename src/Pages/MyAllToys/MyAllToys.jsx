import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import SignleToyDetail from "./SignleToyDetail";

const MyAllToys = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const url = `http://localhost:5000/signgleToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="overflow-x-auto min-h-[calc(100vh-228px)]">
      <h1 className="text-2xl text-center my-10 font-bold">
        My Added Toys Are Here
      </h1>
      {/* <div className="flex justify-center my-8">
        <div className="form-control  ">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square bg-pink-500 border-0 hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div> */}
      <table className="table table-compact w-full">
        <thead>
          <tr>
            {/* <th>No.</th>  */}
            <th>Remove</th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Picture</th>
            <th> Seller Email</th>
            <th>  Rating</th>
            <th> Quantity</th>
            <th> Description</th>            
            <th> Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((SingleData) => (
            <SignleToyDetail
              key={SingleData._id}
              SingleData={SingleData}
            ></SignleToyDetail>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAllToys;
