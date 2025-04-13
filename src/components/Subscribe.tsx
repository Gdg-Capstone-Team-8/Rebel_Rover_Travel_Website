import { Button } from "./ui/button";

const Subscribe = () => {
  return (
    <div className="flex h-[642px] px-12 w-full flex-col items-center justify-center bg-[url('/assets/world.svg')] bg-cover bg-no-repeat text-center break-words">
      <h1 className="mb-6 text-4xl xl:text-6xl font-semibold text-white">
        Subscribe to get special price
      </h1>
      <p className="max-w-[630px] text-center text-sm xl:text-[18px] font-[500] break-words text-[#DFDFDF] mb-19">
        Dont wanna miss something? subscribe right now and get special promotion
        and monthly newsletter
      </p>

      <div className="rounded-full bg-white flex items-center py-1 px-1.5">
        <input
          type="email"
          className="px-[20px] py-[18px] text-xs md:text-base outline-none xl:w-[676px]"
          placeholder="Type your  email here"
        />
        <Button className="cursor-pointer rounded-full px-5 py-6 text-lg md:text-xl font-semibold hover:opacity-60 active:opacity-80">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
