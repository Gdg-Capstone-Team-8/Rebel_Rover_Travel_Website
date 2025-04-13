import insta from "/assets/insta.svg";
import logo from "/assets/logo 2.svg";
import twit from "/assets/twit.svg";
import facebook from "/assets/Vector.svg";
import youtube from "/assets/yt.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer>
      {/* Subscription */}
      <Subscribe />

      {/*Logo with text*/}
      <div className="flex flex-col flex-wrap items-start justify-around gap-x-3 gap-y-6 px-6 py-9 md:flex-row">
        <div className="w-[437px] md:w-[500px]">
          <img src={logo} className="w-[300px]" alt="rebel rover logo" />
          <p className="text-[18px] break-words">
            Explore the world with Rebel Rover. Your adventure starts here.
          </p>
        </div>

        {/*Contact info*/}
        <div className="">
          <h1 className="mb-2 text-xl font-bold">Contact Information</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-1 text-[1.125rem]">
              <MapPin />
              <p className="font-[500] text-[#6C6C6C]">
                732 Despard St, Atlanta
              </p>
            </li>
            <li className="flex gap-1 text-[1.125rem]">
              <Phone />
              <p className="font-[500] text-[#6C6C6C]">+97 888 8888</p>
            </li>
            <li className="flex gap-1 text-[1.125rem]">
              <Mail />
              <p className="font-[500] text-[#6C6C6C]">
                732 Despard St, Atlanta
              </p>
            </li>
          </ul>
        </div>

        {/*Quick links*/}
        <div className="">
          <h1 className="mb-2 text-xl font-bold">Quick links</h1>
          <ul className="flex flex-col gap-2 text-[#6C6C6C] *:text-[1.125rem] *:font-[500] *:hover:underline">
            <Link to={""}>Home</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/package"}>Package</Link>
            <Link to={"/contact"}>Contact</Link>
          </ul>
        </div>

        {/*Follow us*/}
        <div className="">
          <h1 className="mb-2 text-xl font-bold">Follow Us</h1>
          <ul className="flex items-center gap-3 text-black *:text-[1.125rem]">
            <li>
              <a href="#">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twit} alt="twitter logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="youtube logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={insta} alt="instagram logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyrights */}
      <div className="bg-black py-[43px] text-center text-xs text-white md:text-[1rem]">
        Copyright © All rights reserved (Website Developed & Managed by
        creativechroma)
      </div>
    </footer>
  );
};

export default Footer;
