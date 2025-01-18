import { Outlet } from "react-router-dom";
import SideMenu from "../components/sideMenu";
import Navbar from "../components/navbar";

const Main = () => {
  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <SideMenu />

      {/* Outlet --> Dynamic content */}
      <div className="flex-1 md:mx-16">
        <div className="">
          <Navbar/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
