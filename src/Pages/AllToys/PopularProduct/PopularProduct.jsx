import React from "react";
import img1 from "../../../assets/gallary/image1.jpg";
import img2 from "../../../assets/gallary/image2.jpg";
import img3 from "../../../assets/gallary/image3.jpg";
import img4 from "../../../assets/gallary/image4.jpg";
import img6 from "../../../assets/gallary/image6.jpg";
import img7 from "../../../assets/gallary/image7.jpg";
import img8 from "../../../assets/gallary/image8.jpg";
import img9 from "../../../assets/gallary/image9.jpg";
const PopularProduct = () => {
  return (
    <div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className=" p-4 mx-auto space-y-16 sm:p-10">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl">
              Most <span className="text-fuchsia-600 ">Popular Toys</span>
            </h3>
            <p className=" dark:text-gray-400 ">
              Explore our bestseller, celebrated for its exceptional quality and
              unrivaled demand. <br /> Join the ranks of countless satisfied
              customers who have made it their top choice <br /> for
              unparalleled enjoyment and satisfaction.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-6 gap-y-6 mx-auto  sm:grid-cols-2 lg:grid-cols-4">
            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img1}
                alt=""
                className="  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  Ragdoll Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Ragdoll cat, with its gentle temperament and captivating
                blue eyes, is a perfect companion. Its silky coat and relaxed
                nature make it an ideal choice for a loving household pet.
              </p>
              <p className="mt-8 font-semibold">Price : $60</p>
            </div>
            <div className="p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img2}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  The Frog Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Frogs are fascinating amphibians that inhabit diverse
                ecosystems. With their unique ability to jump and their melodic
                croaking, they are a symbol of nature's harmony and
                biodiversity.
              </p>
              <p className="mt-8 font-semibold">Price : $80</p>
            </div>
            <div className=" p-6 flex flex-col justify-center  rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img3}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  Persian Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Persian cat exudes elegance with its long, luxurious coat
                and expressive eyes. Known for its regal demeanor and
                affectionate nature, it brings grace and beauty to any home.
              </p>
              <p className="mt-8 font-semibold">Price : $70</p>
            </div>
            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img8}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  The Apollo Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Encounter The Apollo, a majestic creature with a regal presence,
                representing strength and grace. Inspiring awe with its
                commanding presence, it symbolizes power and magnificence.
              </p>
              <p className="mt-8 font-semibold">Price : $90</p>
            </div>
            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img6}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  Crocodile Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The crocodile, a powerful predator of both land and water,
                commands respect. With its strong jaws and stealthy nature, it
                epitomizes survival and resilience in the animal kingdom.
              </p>
              <p className="mt-8 font-semibold">Price : $75</p>
            </div>
            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img7}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">The Hen</h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                Hens, the heart of the farm, provide fresh eggs and a touch of
                rustic charm. With their clucking and scratching, they
                contribute to the wholesome ambiance of a rural setting.
              </p>
              <p className="mt-8 font-semibold">Price : $65</p>
            </div>
            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img9}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  Octopus Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The octopus is a marvel of the ocean, showcasing intelligence
                and adaptability. With its ability to change colors and squeeze
                into tight spaces, it embodies the wonders of marine life.
              </p>
              <p className="mt-8 font-semibold">Price : $50</p>
            </div>

            <div className=" p-6 flex flex-col justify-center rounded-md shadow-md bg-fuchsia-100">
              <img
                src={img4}
                alt=""
                className="object-cover object-center  rounded-md  dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold text-fuchsia-700">
                  The Comet Toy
                </h2>
              </div>
              <p className="dark:text-gray-100 h-20 overflow-y-auto">
                The Comet streaks across the sky, captivating observers with its
                bright tail and celestial beauty. A fleeting and awe-inspiring
                spectacle, it evokes wonder and fascination.
              </p>
              <p className="mt-8 font-semibold">Price : $80</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularProduct;
