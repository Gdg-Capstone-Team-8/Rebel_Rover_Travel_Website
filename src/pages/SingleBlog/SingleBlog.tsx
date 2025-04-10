import { FaUser, FaCalendarAlt, FaFolder } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import backgroundImage from "@/assets/Travel stories background.svg";
import img1 from "@/assets/img1.svg";
import "./SingleBlog.css";
import img2 from "@/assets/img2.svg";
import img3 from "@/assets/img3.svg";
import img4 from "@/assets/img4.svg";
import img5 from "@/assets/img5.svg";
import CommentList from "@/components/single_blog/CommentList";
import CommentForm from "@/components/single_blog/Reply";
const SingleBlog = () => {
  return (
    <>
      <div
        className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          marginBottom: "120px",
        }}
      >
        <h1 className="font-poppins mb-6 justify-center text-center text-4xl font-bold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-6xl">
          Travel Stories For Now and the Future
        </h1>
        <div className="flex flex-wrap gap-2 gap-y-2 px-4 text-center text-lg">
          <div className="flex items-center space-x-2">
            <FaUser className="text-opacity-75 text-xl text-white" />
            <span className="text-opacity-75 text-xl text-white">Hasmar</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-opacity-75 text-xl text-white" />
            <span className="text-opacity-75 text-xl text-white">
              January 18, 2021
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FaFolder className="text-opacity-75 text-xl text-white" />
            <span className="text-opacity-75 text-xl text-white">
              Stories, Tips
            </span>
          </div>
        </div>
      </div>
      <div className="container min-h-max md:ml-18">
        <div className="section1">
          <img
            style={{ marginBottom: "30px" }}
            src={img1}
            alt="Travel story picture"
          />
          <p style={{ fontWeight: "300", lineHeight: "32px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            redivhenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "450",
              marginBottom: "35px",
              marginTop: "30px",
            }}
          >
            Rice Terraces, Tegallalang
          </h1>
          <p style={{ fontWeight: "300", lineHeight: "32px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <img
            style={{ marginTop: "30px", marginBottom: "30px" }}
            src={img2}
            alt="Travel story picture"
          />
          <p style={{ fontWeight: "300", lineHeight: "32px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="mt-6 border-t border-gray-300 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Tags:</span>
                <span className="text-gray-600">Destination, Travel</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Share This:</span>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-black">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="recentPost">
            <h1
              style={{
                fontSize: "35px",
                fontWeight: "450",
                marginBottom: "35px",
                marginTop: "30px",
                padding: "0 40px",
              }}
            >
              Recent Post
            </h1>
            <div style={{ paddingLeft: "40px" }} className="space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src={img3}
                  alt="recent-post 1"
                  className="h-[99px] w-[149px] rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    Travel Stories for Now and the Future
                  </h3>
                  <p className="text-sm text-gray-500">14 Dec 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={img4}
                  alt="recent-post 2"
                  className="h-[99px] w-[149px] rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    9 Popular Travel Destination on Sale in 2022
                  </h3>
                  <p className="text-sm text-gray-500">14 Dec 2022</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src={img5}
                  alt="recent-post 3"
                  className="h-[99px] w-[149px] rounded object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium">
                    How Are We Going to Travel in 2022?
                  </h3>
                  <p className="text-sm text-gray-500">14 Dec 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="catagories p-6 shadow-md">
            <h1
              style={{
                fontSize: "35px",
                fontWeight: "450",
                marginBottom: "35px",
                marginTop: "30px",
                padding: "0 15px",
              }}
            >
              Catagories
            </h1>
            <ul className="space-y-4">
              <li className="flex items-center border-b pb-2">
                <span className="mr-2 text-gray-500">&rarr;</span>
                <span>Travel</span>
              </li>
              <li className="flex items-center border-b pb-2">
                <span className="mr-2 text-gray-500">&rarr;</span>
                <span>Tips</span>
              </li>
              <li className="flex items-center border-b pb-2">
                <span className="mr-2 text-gray-500">&rarr;</span>
                <span>Stories</span>
              </li>
              <li className="flex items-center border-b pb-2">
                <span className="mr-2 text-gray-500">&rarr;</span>
                <span>Destination</span>
              </li>
            </ul>
          </div>
          <div className="contact rounded-lg bg-black p-6 text-white">
            <h1 className="mt-10 mb-6 px-10 text-2xl font-semibold">
              Have Any Question?
            </h1>
            <h3 className="mb-6 px-10 text-sm font-light">
              Do not hesitate to give us a call. We are an expert team and we
              are happy to talk to you.
            </h3>
            <div className="mb-4 flex items-center px-10">
              <FaPhoneAlt className="text-opacity-75 mr-4 text-white" />
              <h3 className="text-sm font-medium">+62 6943 6956</h3>
            </div>
            <div className="flex items-center px-10">
              <FaEnvelope className="text-opacity-75 mr-4 text-white" />
              <h3 className="text-sm font-medium">contact@domain.com</h3>
            </div>
          </div>
        </div>
        <div className="mb-30">
          <CommentForm />
          <CommentList />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
