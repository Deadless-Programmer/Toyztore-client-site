import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { HiStar } from "react-icons/hi";
const Details = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    sellerName,
    name,
    SubCategory,
    Price,
    sellerEmail,
    picture,
    Rating,
    Quantity,
    Description,
  } = data;

  //    const id = useParams();
  //    console.log("Id from details",id)

  return (
    <div>
      <div className="hero  bg-orange-200">
        <div className="flex justify-center w-[520px]">
          <div className="hero-content h-96 flex-col  lg:flex-row">
            <img className="h-full" src={picture} />
            <div>
              <h1 className="text-2xl font-bold">Toy name : {name}</h1>
              <p className="mt-2 font-semibold">Seller name : {sellerName}</p>
              <p className="mt-2 font-semibold">Seller email : {sellerEmail}</p>
              <p className="mt-2 font-semibold">Price : {Price}</p>

              <p className="mt-2 font-semibold flex items-center gap-1">
                Rating : {Rating} <HiStar className="text-orange-500"></HiStar>
              </p>
              <p className="mt-2 font-semibold ">Quantity : {Quantity}</p>
              <p className="mt-2 font-semibold h-30 overflow-y-auto">
                Description : {Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
