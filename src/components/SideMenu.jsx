import { NavLink } from "react-router-dom";
import { MdOutlineSpeed, MdOutlineTour } from "react-icons/md";
import {
  FaAngleRight,
  FaBlogger,
  FaFileAlt,
  FaFileArchive,
  FaFileInvoiceDollar,
  FaPlaneDeparture,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import icon3 from "../assets/analytics.png";
import { CiBank } from "react-icons/ci";
import { useState } from "react";
import { IoIosArrowBack, IoIosMailOpen } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";

const SideMenu = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    // const open = setOpen
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="relative md:my-10">
      {open === true ? (
        <div>
          {" "}
          <div className=" md:mx-5 text-[#919EAB] border-2 border-dotted border-y-0 border-l-0 w-44 md:w-56">
            <img src="./logo.png" className="w-16 h-16 mx-2" alt="" />
            <div className=" min-h-screen">
              <p className="text-xs px-2 uppercase text-[#919EAB]">Overview</p>
              <ul className="menu space-y-3">
                {/* App */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/app"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <MdOutlineSpeed className="text-[#00A76F]" /> App
                  </NavLink>
                </li>

                {/* E-commerce */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/e-commerce"
                    className="flex flex-row items-center gap-x-2"
                  >
                    {" "}
                    <FaShoppingBag /> E-commerce{" "}
                  </NavLink>
                </li>

                {/* Analysis */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/analysis"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <img src={icon3} className="h-4" alt="" /> Analysis{" "}
                  </NavLink>
                </li>

                {/* Banking */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/banking"
                    className="flex flex-row items-center gap-x-2"
                  >
                    {" "}
                    <CiBank className="text-xl" /> Banking{" "}
                  </NavLink>
                </li>

                {/* Booking */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/booking"
                    className="flex flex-row items-center gap-x-2"
                  >
                    {" "}
                    <FaPlaneDeparture /> Booking{" "}
                  </NavLink>
                </li>

                {/*  file  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <NavLink
                    to="/file"
                    className="flex flex-row items-center gap-x-2"
                  >
                    <FaFileAlt />
                    File{" "}
                  </NavLink>
                </li>

                <div className="divider"></div>

                <p className="text-xs p-3 uppercase text-[#919EAB]">
                  management
                </p>

                {/* user  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <FaUser className=" hover:text-[#00A76F] " /> User
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* product  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <GiClothes className=" hover:text-[#00A76F] " /> Product
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Order  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <FaShoppingCart className=" hover:text-[#00A76F] " />{" "}
                      Order
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Invoice  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <FaFileInvoiceDollar className=" hover:text-[#00A76F] " />{" "}
                      Invoice
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Blog  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <FaBlogger className=" hover:text-[#00A76F] " />
                      Blog
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Job  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <IoBagSharp className=" hover:text-[#00A76F] " />
                      Job
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Tour  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <MdOutlineTour className=" hover:text-[#00A76F] " />
                      Tour
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* File Manager  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <FaFileArchive className=" hover:text-[#00A76F] " />
                      File Manager
                    </NavLink>

                    <FaAngleRight />
                  </div>
                </li>

                {/* Mail  */}
                <li className="hover:bg-[#00A76F14] p-3 hover:rounded-md hover:text-[#00A76F]">
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/"
                      className="flex flex-row items-center gap-x-3"
                    >
                      <IoIosMailOpen className=" hover:text-[#00A76F] " />
                      Mail
                    </NavLink>

                    <button className="text-[#B71D18] font-bold bg-red-200/50 p-1 px-2 rounded-md">
                      +32
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <button
        onClick={handleClose}
        className={`absolute top-10 h-10 w-10 bg-green-100 rounded-full flex justify-center ${
          open === true
            ? "left-40 md:left-56 hover:bg-green-400"
            : "left-0 hover:bg-green-400"
        } items-center`}
      >
        {open === true ? <IoIosArrowBack /> : <FaAngleRight />}
      </button>
    </div>
  );
};

export default SideMenu;
