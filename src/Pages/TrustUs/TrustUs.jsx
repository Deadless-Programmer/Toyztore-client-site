import React from "react";

const TrustUs = () => {
  return (
    <div>
      <section className="bg-fuchsia-100 drop-shadow-md">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">
                  Why Rely on{" "}
                  <span className="text-fuchsia-600">Our Expertise</span>{" "}
                </h3>
                <p className="  mt-4">
                  Establishing Trust with Expertise: With a solid foundation
                  built on our proven track record and extensive industry
                  knowledge, we are the dependable choice for all your toy
                  needs. Count on our experience, reliability, and commitment to
                  delivering exceptional quality toys and outstanding customer
                  service.
                </p>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold text-fuchsia-600 ">
                    Unmatched Quality
                  </h3>

                  <p className="mt-1">
                    We pride ourselves on offering top-notch products that
                    undergo rigorous quality control. From the finest materials
                    to superior craftsmanship, our toys are built to withstand
                    playtime adventures and provide long-lasting enjoyment.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold text-fuchsia-600 ">
                    Educational Value
                  </h3>

                  <p className="mt-1">
                    Our toys go beyond entertainment. Designed with learning in
                    mind, they stimulate cognitive development, promote
                    creativity, and encourage problem-solving skills, ensuring
                    that children have fun while acquiring valuable knowledge.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold text-fuchsia-600 ">
                    Customer Satisfaction
                  </h3>

                  <p className="mt-1">
                    We prioritize your happiness and strive to provide an
                    exceptional shopping experience. With prompt shipping,
                    responsive customer support, and hassle-free returns, we are
                    dedicated to ensuring your utmost satisfaction from start to
                    finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustUs;
