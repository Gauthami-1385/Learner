import React from "react";
import { motion } from "framer-motion";
const Framer = () => {
  return (
    <div className="min-h-screen text-[#56bac7] bg-[#c69c1ed9] border border-pink-400 p-3">
      <p className="text-center  font-mono   text-sm
       md:text-3xl lg:text-5xl font-semibold">Let's dive into the world of animation</p>
      <div>
        <motion.div
          initial={{ opacity:0 ,scale: 0 }}
          animate={{ opacity:1,scale: 1 }}
          className="flex items-center justify-center"
        >
          <div className="flex items-center justify-center p-2 m-2 rounded-full w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 border border-green-900 bg-green-900">
           <div className="m-3 text-center text-sm md:text-base lg:text-lg">
            Have you ever used Framer?
            </div> 
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Framer;
