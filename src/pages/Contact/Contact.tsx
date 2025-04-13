import myImage from "@/assets/Package/images/cont.jpg";
import "./index.css";

function ContactForm() {
  return (
    <div>
      <div
        className="color: var(--color-white) flex h-[85vh] w-full flex-col place-items-center items-center justify-center md:h-[95vh] xl:h-screen"
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-6xl">
          Contact us
        </h1>
        <p className="flex items-center gap-1 text-xl font-semibold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-3xl">
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          Contact
        </p>
      </div>
      <div className="w-full max-w-250 px-4 py-10 sm:text-sm md:mx-auto md:py-10">
        <div className="">
          <div className="md:py2 grid grid-cols-1 gap-10 px-[6%] py-24 md:grid-cols-2 md:px-2">
            <div className="px-[5%] py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <form className="space-y-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="w-full border border-gray-300 p-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full border border-gray-300 p-3 text-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="mt-5 w-full rounded-full bg-black px-2 py-1 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-4 pl-[10] tracking-tight md:px-2">
              <h2 className="font-popins text-4xl font-bold text-black">
                Get In Touch
              </h2>
              <p className="text-sm leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid w-full grid-cols-2 gap-x-5 gap-y-4">
                <div className="flex flex-col space-y-3 p-2">
                  <h3 className="text-base font-semibold text-black">
                    Lhoksemawe, Aceh
                  </h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>+62 6943 6956</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>contact@domain.com</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Jl. Darussalam Hagu selatan</span>
                  </div>
                </div>
                <div className="space-y-3 p-2">
                  <h3 className="text-base font-semibold text-black">
                    Lhoksemawe, Aceh
                  </h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />{" "}
                    </svg>
                    <span>+62 6943 6956</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />{" "}
                    </svg>
                    <span>contact@domain.com</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />{" "}
                    </svg>
                    <span>Jl. Darussalam Hagu selatan</span>
                  </div>
                </div>
                <div className="space-y-3 p-2">
                  <h3 className="text-base font-semibold text-black">
                    Lhoksemawe, Aceh
                  </h3>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />{" "}
                    </svg>
                    <span>+62 6943 6956</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />{" "}
                    </svg>
                    <span>contact@domain.com</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />{" "}
                    </svg>
                    <span>Jl. Darussalam Hagu selatan</span>
                  </div>
                </div>
                <div className="space-y-3 p-2">
                  <h3 className="text-base font-semibold text-black">
                    Lhoksemawe, Aceh
                  </h3>
                  <div className="flex items-center space-x-1.5 text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />{" "}
                    </svg>
                    <span>+62 6943 6956</span>
                  </div>
                  <div className="space-x-1text-gray-700 flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />{" "}
                    </svg>
                    <span>contact@domain.com</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />{" "}
                    </svg>
                    <span>Jl. Darussalam Hagu selatan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
