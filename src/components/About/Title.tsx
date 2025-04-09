import { ChevronRight } from "lucide-react";

export const Title = () => {
  return (
    <div
      className={`mt-0 flex h-[85vh] w-full flex-col place-items-center items-center justify-center bg-[url(@/assets/about/unsplash_rjfOdiB7k-E.jpg)] bg-cover bg-bottom text-white lg:pb-45`}
    >
      <h1 className="text-4xl font-bold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-6xl">
        About us
      </h1>
      <p className="flex items-center gap-1 text-xl font-semibold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-3xl">
        Home
        <ChevronRight size={40} />
        About
      </p>
    </div>
  );
};
