import React from "react";

const Cards = ({ name, image, type }) => {
  return (
    <div className=" m-2 p-2 h-auto w-auto rounded-lg shadow-neon  bg-black flex flex-col justify-around items-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
      <div className="font-bold">{name.toUpperCase()}</div>
      <div className="m-2">
        <img src={image} alt={name} />
      </div>
      <div>Type: {type}</div>
    </div>
  );
};

export default Cards;
