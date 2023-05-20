import React from "react";
import img1 from "../../../assets/gallary/image1.jpg";
import img2 from "../../../assets/gallary/image2.jpg";
import img3 from "../../../assets/gallary/image3.jpg";
import img4 from "../../../assets/gallary/image4.jpg";
import img6 from "../../../assets/gallary/image6.jpg";
import img7 from "../../../assets/gallary/image7.jpg";
import img8 from "../../../assets/gallary/image8.jpg";
import img9 from "../../../assets/gallary/image9.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import setTitleName from "../../hoooks/hooks";
const PopularProduct = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  setTitleName('PopularProduct')
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className=" p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4 text-center">
            <h3
              data-aos="fade-up"
              className="text-2xl font-bold leading-none sm:text-3xl"
            >
              Most <span className="text-pink-600">Popular Toys</span>
            </h3>
            <p data-aos="zoom-in" className=" dark:text-gray-400 ">
              Explore our bestseller, celebrated for its exceptional quality and
              unrivaled demand. <br /> Join the ranks of countless satisfied
              customers who have made it their top choice <br /> for
              unparalleled enjoyment and satisfaction.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-6 mx-auto  sm:grid-cols-2 lg:grid-cols-4">
            <div
              data-aos="fade-up"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img1}
                alt=""
                className="  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  Ragdoll Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Ragdoll cat, with its gentle temperament and captivating
                blue eyes, is a perfect companion. Its silky coat and relaxed
                nature make it an ideal choice for a loving household pet.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $85</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.7</span>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img2}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  The Frog Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Frogs are fascinating amphibians that inhabit diverse
                ecosystems. With their unique ability to jump and their melodic
                croaking, they are a symbol of nature's harmony and
                biodiversity.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $90</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.7</span>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              className=" p-6 flex flex-col justify-center  rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img3}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  Persian Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Persian cat exudes elegance with its long, luxurious coat
                and expressive eyes. Known for its regal demeanor and
                affectionate nature, it brings grace and beauty to any home.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $70</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.5</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img8}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  The Apollo Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Encounter The Apollo, a majestic creature with a regal presence,
                representing strength and grace. Inspiring awe with its
                commanding presence, it symbolizes power and magnificence.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $120</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.9</span>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img6}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  Crocodile Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The crocodile, a powerful predator of both land and water,
                commands respect. With its strong jaws and stealthy nature, it
                epitomizes survival and resilience in the animal kingdom.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $110</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.8</span>
                </div>
              </div>
            </div>
            <div
              data-aos="flip-left"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img7}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">The Hen</h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Hens, the heart of the farm, provide fresh eggs and a touch of
                rustic charm. With their clucking and scratching, they
                contribute to the wholesome ambiance of a rural setting.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $95</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.7</span>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img9}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  Octopus Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The octopus is a marvel of the ocean, showcasing intelligence
                and adaptability. With its ability to change colors and squeeze
                into tight spaces, it embodies the wonders of marine life.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $100</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.8</span>
                </div>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100"
            >
              <img
                src={img4}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-pink-600">
                  The Comet Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Comet streaks across the sky, captivating observers with its
                bright tail and celestial beauty. A fleeting and awe-inspiring
                spectacle, it evokes wonder and fascination.
              </p>
              <div className="flex justify-between items-center ">
                <p className="mt-8 font-semibold">Price : $80</p>
                <div className="flex items-center space-x-2 mt-8 dark:text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className=" font-bold">4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProduct;
