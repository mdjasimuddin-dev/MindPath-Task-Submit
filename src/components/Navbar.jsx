import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import flagIcon from "../assets/Frame.svg";
import notificationIcon from "../assets/notification.svg";
import userIcon from "../assets/user.svg";
import settingIcon from "../assets/setting.svg";
import avaterImg from "../assets/avatar.png";

const Navbar = () => {
  const [boxOpen, setBoxOpen] = useState(false);

  const handleOpen = () => {
    setBoxOpen(!boxOpen);
    console.log(boxOpen);
  };
  return (
    <div className="flex justify-between p-10 ml-10 pr-0 min-w-[650px]">
      <div className="">
        <ul className="flex items-center gap-x-3">
          <button onClick={handleOpen}>
            <IoSearchOutline className="md:w-8 md:h-8" />
          </button>

          {boxOpen === true ? (
            <>
              <li className="flex gap-x-2">
                <input type="text" className="border-2 p-1 w-32 md:w-56" />
                <button className="p-1 md:p-2 bg-slate-200 rounded-md">
                  Search
                </button>
              </li>
            </>
          ) : (
            ""
          )}

          <button className="p-1 w-8 h-8 px-3 text-xs rounded-md bg-[#637381] text-white">
            K
          </button>
        </ul>
      </div>

      <div className="">
        <ul className="flex gap-x-6 gap-r-0">
          <li>
            <img src={flagIcon} className="rounded-3xl w-10 h-10" alt="" />
          </li>
          <li className="relative">
            <img src={notificationIcon} className="w-10 h-10" alt="" />
            <p className=" top-0 right-0 absolute h-5 w-5 bg-red-500 text-white text-xs rounded-full flex justify-center items-center">
              <span>4</span>
            </p>
          </li>
          <li>
            <img src={userIcon} className="w-10 h-10" alt="" />
          </li>
          <li>
            <img src={settingIcon} className="w-10 h-10" alt="" />
          </li>
          <li>
            <img src={avaterImg} className="rounded-full w-10 h-10" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
