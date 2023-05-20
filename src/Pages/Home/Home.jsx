import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import TrustUs from "../TrustUs/TrustUs";
import PopularProduct from "../AllToys/PopularProduct/PopularProduct";
import AosPackege from "../AosPackege/AosPackege";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../Loader/Loader";
import ReactTab from "../ReactTab/ReactTab";
import setTitleName from "../hoooks/hooks";



const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  setTitleName('home')

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ReactTab></ReactTab>
      <PopularProduct></PopularProduct>
      <TrustUs></TrustUs>
    </div>
  );
};

export default Home;
