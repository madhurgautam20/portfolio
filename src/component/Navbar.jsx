import React, { useState } from "react";
import pic from "../../public/logo.jpg";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl dark:text-white dark:bg-black container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Madhu<span className="text-green-500 text-2xl">r</span><span> Gautam</span>
              <p className="text-sm ">
                <span className="text-blue-600">MERN</span> Developer
              </p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => {
                setMenu(!menu);
              }}
              className="md:hidden bg-white dark:bg-black dark:text-white"
            >
              {menu ? <ImCross size={20} /> : <MdMenu size={20} />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar*/}
        {menu && (
          <div className="bg-white dark:bg-black">
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                  className=" dark:text-white"
                    onClick={() => {
                      setMenu(!menu);
                    }}
                    to={text}
                    smooth={true}
                    duration={500}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
