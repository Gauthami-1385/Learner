import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { NavbarMenu } from "../data/data";
import { FaEarlybirds, FaHamburger } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="custom-blur-backdrop">
        <div className="container flex justify-between items-center py-6 text-white custom-blur-backdrop">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold  text-white">
            <FaEarlybirds className="" />
            <p>Coder</p>
            <p className="text-orange-400">Girl</p>
          </div>
          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 font-semibold">
              {NavbarMenu.map((item) => (
                <Link id={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>

          {/* mobile */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {<FaHamburger className="text-white h-9 w-9" />}
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={isOpen} />
    </>
  );
};

export default Navbar;
// className="sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-gray-700"
{
  /* <div className=" mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-white font-semibold">Logo</span>
         
          <div className="flex space-x-4 text-white">
            {NavbarMenu.map((item) => (
              <Link id={item.id} to={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div> */
}
