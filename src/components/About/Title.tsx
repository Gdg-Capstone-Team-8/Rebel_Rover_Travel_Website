import { ChevronRight } from "lucide-react";

export const Title = () => {
  return (
    <div
      className={`flex h-[85vh] md:h-[95vh] xl:h-screen w-full flex-col items-center justify-center bg-[url(/assets/about/unsplash_rjfOdiB7k-E.jpg)] bg-cover bg-bottom text-white`}
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
