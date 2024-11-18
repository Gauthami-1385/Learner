import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" bg-[url('../images/main.avif')] bg-no-repeat bg-cover">
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="p-10">
        <h1 className="text-[6vw] font-semibold text-white">The Complete <span className="text-orange-500">React Learner</span> </h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="m-12 min-h-9 h-auto w-[50%] flex text-white border border-white p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            aliquam quidem quo enim excepturi cum voluptatem, labore modi, quos
            officia repudiandae cumque dolores odio. Et facilis enim deserunt
            aliquam accusantium.
          </div>
          <div className="m-12 h-auto w-[50%] flex text-white border border-white p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            aliquam quidem quo enim excepturi cum voluptatem, labore modi, quos
            officia repudiandae cumque dolores odio. Et facilis enim deserunt
            aliquam accusantium.
          </div>
          <div className="m-12 h-auto w-[50%] flex text-white border border-white p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            aliquam quidem quo enim excepturi cum voluptatem, labore modi, quos
            officia repudiandae cumque dolores odio. Et facilis enim deserunt
            aliquam accusantium.
          </div>
          <div className="m-12 h-auto w-[50%] flex text-white border border-white p-5">
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
