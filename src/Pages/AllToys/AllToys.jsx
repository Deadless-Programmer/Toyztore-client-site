import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SignleToy from "./SignleToy";

const AllToys = () => {
  const Alldatas = useLoaderData();
  const [serach, setSearch]=useState('');
  const [datas, setDatas]=useState(Alldatas);
  console.log(datas);
  const handleSearch =()=>{
      fetch(`http://localhost:5000/getToyByText/${serach}`)
      .then(res=> res.json())
      .then(data=>{
        setDatas(data)
      })
  }
  return (
    <div className="overflow-x-auto min-h-[calc(100vh-228px)]">
      <h1 className="text-2xl text-center mt-5 font-bold">All Toy Here</h1>
      <div className="flex justify-center my-8">
        <div className="form-control  ">
          <div className="input-group ">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square bg-pink-500 border-0 hover:bg-green-600">
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
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            {/* <th>No.</th>  */}
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th> Details</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <SignleToy key={data._id} data={data}></SignleToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
