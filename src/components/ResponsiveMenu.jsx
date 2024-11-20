import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../data/data";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const ResponsiveMenu = ({ open, close }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full min-h-screen z-20 text-white custom-blur-backdrop "
        >
          <div className="text-xl font-semibold uppercase  py-10 m-6 rounded-3xl ">
            <div className="">
              <IoClose
                onClick={() => {
                  close(false);
                }}
              />
            </div>
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <Link key={item.id} to={item.link}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
