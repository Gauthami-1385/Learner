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
      <nav className="custom-blur-backdrop ">
        <div className="container flex justify-between items-center py-4 md:py-6 lg:py-6 text-white custom-blur-backdrop">
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
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>

          {/* mobile */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {<FaHamburger className="text-white h-7 w-7 cursor-pointer" />}
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={isOpen} close={setIsOpen} />
    </>
  );
};

export default Navbar;
