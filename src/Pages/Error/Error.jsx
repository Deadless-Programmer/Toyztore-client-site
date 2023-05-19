import React from "react";
import errorPage from "../../assets/gallary/4c81c1ad46bf515c32dbad27b87a2f50.gif";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
          <img src={errorPage} alt="" />
          <p className="text-3xl text-fuchsia-700">{error.message}</p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold text-white  rounded bg-fuchsia-600 hover:bg-cyan-600"
          >
            Back to homepage
          </Link>
          {/* <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100">Border</button> */}
        </div>
      </section>
    </div>
  );
};

export default Error;
