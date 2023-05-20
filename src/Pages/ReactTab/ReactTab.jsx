import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ReactTab = () => {
  const [categoryTitle, setCategoryTitle] = useState("cat");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`https://toyztore-server.vercel.app/category/${categoryTitle}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [categoryTitle]);

  console.log(category);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-auto w-full my-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Select And Shop Based On{" "}
          <span className="text-pink-600">Category</span>{" "}
        </h1>
        <p className="mt-4">
          Browse through a wide range of products organized into various
          categories. <br /> Choose and shop conveniently based on your
          preferences, making <br /> your online shopping experience efficient
          and enjoyable.
        </p>
      </div>
      <Tabs className="text-center mt-8 ">
        <TabList classID="">
          <Tab onClick={() => setCategoryTitle("cat")}>Cat Toys</Tab>
          <Tab onClick={() => setCategoryTitle("horse")}>Horse Toys</Tab>
          <Tab onClick={() => setCategoryTitle("hen")}>Hen Toys</Tab>
        </TabList>

        <div className="mx-auto">
          <TabPanel>
            <div data-aos="fade-up" className=" md:flex justify-center gap-5">
              {category.map((cData) => (
                <div className="card  card-compact w-80 md:96 mt-5 bg-orange-200 shadow-xl">
                  <figure className="h-56">
                    <img
                      className="h-64 border w-full"
                      src={cData.picture}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"> Name: {cData.toyName}</h2>
                    <div className="flex justify-between">
                      <p className="font-semibold"> Price : {cData.Price}</p>
                      <p className="font-semibold ml-20 flex flex-col items-center">
                        {" "}
                        Rating{" "}
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={cData.Rating}
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="card-actions justify-center">
                      <Link to={`/productDetails/${cData._id}`}>
                        <button className="btn  text-fuchsia-200 bg-pink-600 border-0 hover:bg-green-600">
                          Veiw Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-up" className=" md:flex justify-center gap-5">
              {category.map((cData) => (
                <div className="card  card-compact w-80 md:96 mt-5 bg-orange-200 shadow-xl">
                  <figure className="h-56">
                    <img
                      className="h-64 border w-full"
                      src={cData.picture}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"> Name: {cData.toyName}</h2>
                    <div className="flex justify-between">
                      <p className="font-semibold"> Price : {cData.Price}</p>
                      <p className="font-semibold ml-20 flex flex-col items-center">
                        {" "}
                        Rating{" "}
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={cData.Rating}
                          readOnly
                        />
                      </p>
                    </div>
                    <div className="card-actions justify-center">
                      <Link to={`/productDetails/${cData._id}`}>
                        <button className="btn  text-fuchsia-200 bg-pink-600 border-0 hover:bg-green-600">
                          Veiw Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div data-aos="fade-up" className=" md:flex justify-center gap-5">
              {category.map((cData) => (
                <div className="card  card-compact w-80 md:96 mt-5 bg-orange-200 shadow-xl">
                  <figure className="h-56">
                    <img
                      className="h-64 border w-full"
                      src={cData.picture}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"> Name: {cData.toyName}</h2>
                    <div className="flex justify-between">
                      <p className="font-semibold"> Price : {cData.Price}</p>
                      <div className="">
                      <p className="font-semibold ml-20 flex flex-col items-center">
                        {" "}
                        Rating{" "}
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={cData.Rating}
                          readOnly
                        />
                      </p>
                      </div>
                    </div>
                    <div className="card-actions justify-center">
                      <Link to={`/productDetails/${cData._id}`}>
                        <button className="btn  text-fuchsia-200 bg-pink-600 border-0 hover:bg-green-600">
                          Veiw Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ReactTab;
