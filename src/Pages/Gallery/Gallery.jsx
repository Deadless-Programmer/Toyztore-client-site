import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="text-center ">
        <h1 data-aos="fade-up" className="text-3xl font-bold mt-20 ">
          " <span className="text-fuchsia-600">Toyland</span> Treasures Gallery"
        </h1>
        <p data-aos="flip-left" className="mt-4">
          Step into our Toyland Treasures Gallery and explore a visual delight
          of our enchanting toys. <br /> Discover the joy and wonder as you
          relive the magic of playtime.
        </p>
      </section>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1684164601813-78b246ce18de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
            data-aos="flip-left"
            className="w-full h-full  border-5 col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square "
          />
          <img
            alt=""
            data-aos="fade-up"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
          <img
            alt=""
            data-aos="zoom-in"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1544788978-bc4ae77f8119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80"
          />
          <img
            alt=""
            data-aos="fade-up"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/59720/pexels-photo-59720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            alt=""
            data-aos="zoom-in"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            alt=""
            data-aos="fade-up"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/1420706/pexels-photo-1420706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            alt=""
            data-aos="zoom-in"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/2156289/pexels-photo-2156289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            alt=""
            data-aos="fade-up"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/3661243/pexels-photo-3661243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            alt=""
            data-aos="fade-up"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://images.pexels.com/photos/1362595/pexels-photo-1362595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            src="https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            data-aos="flip-left"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
