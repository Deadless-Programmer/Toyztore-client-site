import React, { useContext } from "react";
import logo from "../../../assets/onlyLogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const hadleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className="font-medium">
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li className="font-medium">
        <ActiveLink to="/allToys">All Toys</ActiveLink>
      </li>
      <li className="font-medium">
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
      {user?.email ? (
        <>
          <li className="font-medium">
            <ActiveLink to="/myToys">My Toys</ActiveLink>
          </li>
          <li className="font-medium">
            <ActiveLink to="/addAtoys">Add A Toy</ActiveLink>
          </li>
          <div>
            <label
              className=" avatar tooltip tooltip-bottom tooltip-success"
              data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </label>
          </div>
          <li className="font-medium">
            <ActiveLink><button onClick={hadleLogOut}>Log Out</button></ActiveLink>
          </li>{" "}
        </>
      ) : (
        <li className="font-medium">
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-lime-100 drop-shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className=" flex items-center">
            <img className="w-20" src={logo} alt="" />
            <a className="btn btn-ghost normal-case text-3xl font-bold">
              <span className="text-pink-600">Toyz</span>{" "}
              <span className="text-green-600">tore</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </button> */}

          {/* {user &&  <label className=" avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName} >
           <div className="w-10 rounded-full " >
               <img src={user?.photoURL} />
           </div>
       </label>} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
