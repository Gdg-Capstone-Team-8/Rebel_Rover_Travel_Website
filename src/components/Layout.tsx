import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="relative max-h-max min-h-screen font-[Poppins]">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
