import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-[url('../images/main.avif')] bg-no-repeat bg-cover">
      {/* Navbar Section */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>

      <div className="p-10">
        <div className="flex flex-col gap-2 items-center sm:flex-col md:flex-row">
          <p className="text-4xl md:text-4xl lg:text-6xl font-semibold text-white ">
            The Complete
          </p>
          <span className="w-max  ">
            <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-4xl md:text-4xl lg:text-6xl  text-orange-500 font-bold">
              React Learner
            </p>
          </span>
        </div>

        {/* bg-[#252854]  */}
        <div className="flex flex-col justify-center items-center sm:flex-col md:flex-col lg:flex-row">
          <div className="m-3 p-4 min-h-10  rounded-2xl h-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] text-white border border-white md:p-5 md:m-6 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            aliquam quidem quo enim excepturi cum voluptatem, labore modi, quos
            officia repudiandae cumque dolores odio. Et facilis enim deserunt
            aliquam accusantium.
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Home;
