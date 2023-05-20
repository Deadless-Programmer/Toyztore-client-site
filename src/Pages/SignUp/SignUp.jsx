import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigete = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const HandleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if(user){
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'User successfully create an new account',
            showConfirmButton: 'Cool',
            timer: 1500
          })
        }
        navigete(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="py-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 w-96  mx-auto bg-orange-200">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to access your account
          </p>
        </div>
        <form
          onSubmit={HandleSignUp}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="name"
                required
                name="name"
                id="name"
                placeholder="Include Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="yourMail@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="name"
                name="photo"
                required
                placeholder="Include Your Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full border hover:bg-green-400 hover:text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="hover:underline text-green-600 "
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default SignUp;
