import satisfied_client from "../../assets/about/satisfied_client.svg";
import traveler from "../../assets/about/traveler.svg";
import destination from "../../assets/about/destination.svg";
import award from "../../assets/about/award.svg";

export const Statistics = () => {
  return (
    <div
      className={`justify-evenly mt-15 mb-0 flex h-[40vh] sm:h-[65vh] w-full shrink-0 place-items-center bg-[url(@/assets/about/unsplash_okVXy9tG3KY.png)] bg-cover bg-center bg-no-repeat lg:mt-25 lg:h-150 lg:justify-evenly lg:gap-20`}
    >
      <div className="flex flex-col flex-wrap place-items-center lg:gap-5 p-2 text-white lg:flex-row lg:flex-nowrap">
        <img
          className="h-6 w-6 lg:h-[80px] lg:w-[80px]"
          src={satisfied_client}
        />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            126 <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Satisfied Clients
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap place-items-center lg:gap-5 p-2 text-white lg:flex-row lg:flex-nowrap">
        <img
          className="h-6 w-6 lg:h-[80px] lg:w-[80px]"
          src={traveler}
        />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            230 <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              New travelers
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap place-items-center lg:gap-5 p-2 text-white lg:flex-row lg:flex-nowrap">
        <img
          className="h-6 w-6 lg:h-[80px] lg:w-[80px]"
          src={destination}
        />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            230 <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Destinations
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col place-items-center p-2 text-white lg:flex-row lg:flex-nowrap">
        <img
          className="h-6 w-6 lg:h-[80px] lg:w-[80px]"
          src={award}
        />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            230 <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Awards
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
