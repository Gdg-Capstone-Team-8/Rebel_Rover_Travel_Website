import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1 1.svg";
import CustomDrawer from "./CustomDrawer";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-[#120B0B82] px-[20px] py-[20px] md:px-[40px]">
      {/*logo*/}
      <div className="w-[200px] md:w-[300px]">
        <img src={logo} className="w-max" alt="rebel rover logo" />
      </div>
      {/*navbar*/}
      <nav>
        <div className="md:[display:none]">
          <CustomDrawer />
        </div>
        <ul className="[display:none] flex-wrap *:opacity-60 *:duration-200 md:flex md:gap-x-2 xl:gap-x-8 [&_a.active]:opacity-100">
          <NavLink
            className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100"
            to={"/about"}
          >
            About us
          </NavLink>
          <NavLink
            className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100"
            to={"/package"}
          >
            Package
          </NavLink>
          <NavLink
            className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100"
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100"
            to={"/contact"}
          >
            Contact
          </NavLink>
          <Search className="cursor-pointer text-[1.2rem] font-semibold text-white hover:opacity-100" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
