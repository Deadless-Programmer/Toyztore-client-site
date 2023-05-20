import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
// import { ToastContainer, toast } from "react-toastify";
const UpdateToy = () => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
  console.log(toy);
  const {
    _id,

    Price,

    Quantity,
    Description,
  } = toy;

  const toysHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const Price = form.Price.value;

    const Quantity = form.Quantity.value;
    const Description = form.Description.value;
    // const userEmail = user?.email;
    console.log(
      Price,

      Quantity,
      Description
    );
    const newToys = {
      Price,

      Quantity,
      Description,
    };
    console.log(newToys);

    fetch(`http://localhost:5000/signgleToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                // position: 'top-end',
                icon: 'success',
                title: 'Your Info Successfully Update',
                showConfirmButton: 'Cool',
                timer: 1500
              })
        }
       
      });
  };
  return (
    <div>
      <form onSubmit={toysHandler} className=" h-auto bg-base-200 mb-5  p-4 ">
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Update Price</span>
              </label>
              <input
                type="text"
                required
                defaultValue={Price}
                name="Price"
                placeholder="$ Price"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Update Available Quantity</span>
              </label>
              <input
                type="text"
                required
                defaultValue={Quantity}
                name="Quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="form-control w-auto ">
            <label className="label">
              <span className="label-text"> Update Detail Description</span>
            </label>
            <textarea
              id="bio"
              required
              name="Description"
              placeholder=""
              className="w-[600px] rounded-lg border-2 h-24  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="form-control mt-6 w-[600px]  rounded   ">
            <button className="btn bg-pink-500 border-0 hover:bg-green-600  ">
              Update
            </button>
          </div>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default UpdateToy;
