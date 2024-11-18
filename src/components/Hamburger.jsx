import React from "react";

const Hamburger = () => {
  return (
    <div className="group cursor-pointer">
      <div className="grid justify-items-center gap-1.5">
        <span className="h-1 w-8 rounded-full bg-white transition transform group-hover:rotate-45 group-hover:translate-y-2.5"></span>
        <span className="h-1 w-8 rounded-full bg-white transition transform group-hover:scale-x-0"></span>
        <span className="h-1 w-8 rounded-full bg-white transition transform group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
      </div>
    </div>
  );
};

export default Hamburger;
