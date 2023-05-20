import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const AddASingleToys = () => {
  const { user } = useContext(AuthContext);
  const toysHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const SubCategory = form.SubCategory.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const Quantity = form.Quantity.value;
    const Description = form.Description.value;
    // const userEmail = user?.email;
    console.log(
      toyName,
      picture,
      sellerName,
      sellerEmail,
      SubCategory,
      Price,
      Rating,
      Quantity,
      Description
    );
    const newToys = {
      toyName,
      picture,
      sellerName,
      sellerEmail,
      SubCategory,
      Price,
      Rating,
      Quantity,
      Description
      
    };
    console.log(newToys);

    fetch("http://localhost:5000/signgleToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: 'Cool',
            timer: 1500
          })
        }
      });
  };
  return (
    <div>
      <form onSubmit={toysHandler} className=" h-auto bg-base-200 mb-5  p-4 ">
        <div className="flex justify-center mt-5  ">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="toyName"
                required
                placeholder="Name"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL</span>
              </label>
              <input
                type="text"
                required
                name="picture"
                placeholder="Picture"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                required
                name="sellerName"
                placeholder="Seller Name"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="text"
                required
                name="sellerEmail"
                placeholder="Seller Email"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category</span>
              </label>
              <input
                type="text"
                required
                name="SubCategory"
                placeholder="Sub-category"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                required
                name="Price"
                placeholder="$ Price"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                required
                name="Rating"
                placeholder="Rating"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                required
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
              <span className="label-text">Detail Description</span>
            </label>
            <textarea
              id="bio"
              name="Description"
              required
              placeholder=""
              className="w-[600px] rounded-lg border-2 h-24  focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="form-control mt-6 w-[600px]  rounded   ">
            <button className="btn bg-pink-500 border-0 hover:bg-green-600  ">
              Add Toy
            </button>
          </div>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddASingleToys;
