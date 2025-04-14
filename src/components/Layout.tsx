import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="relative max-h-max min-h-screen w-full overflow-x-clip font-[Poppins]">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
