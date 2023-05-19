import React from "react";
import bg from "../../assets/gallary/bg.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
        // style={{
        //   backgroundImage: `url("bg")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-up"
              className="mb-5 text-5xl font-bold text-fuchsia-200"
            >
              "Bringing Smiles to Every Child's Face."
            </h1>
            <p data-aos="zoom-in" className="mb-5 text-fuchsia-200">
              Step into a world of wonder and excitement! Our toy website is a
              treasure trove of imagination, offering a vast selection of toys
              that spark joy and inspire endless adventures.
            </p>
            <button
              data-aos="flip-left"
              className="btn text-fuchsia-200 bg-fuchsia-600 border-0 hover:bg-cyan-600 "
            >
              Shop now!{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
