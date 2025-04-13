import ExploreFilter from "./ExploreFilter";

export default function HeroSection() {
  return (
    <section className="flex h-screen items-end justify-center bg-[url(@/assets/homeimage.jpg)] bg-cover bg-bottom bg-no-repeat pb-12 md:pb-28">
      {/* Overlay Content */}
      <div className="flex w-full flex-col gap-y-3 px-2 md:pl-16 lg:pl-24">
        {/* Text Content - Left Aligned */}
        <div className="flex flex-1 flex-col items-start justify-center gap-y-8">
          <h1 className="mb-2 self-center text-center text-5xl font-bold text-white drop-shadow-[0px_4px_4px] drop-shadow-[rgba(0,0,0,0.25)] md:mb-3 md:self-start md:text-left md:text-6xl xl:text-8xl">
            Make in <br /> your journey.
          </h1>
          <p className="max-w-md self-center text-center text-[#cecece] drop-shadow-[0px_4px_4px] drop-shadow-[rgba(0,0,0,0.25)] md:self-start md:text-left md:text-lg">
            Explore the world with what you love beautiful and natural beauty.
          </p>
        </div>

        {/* Search Box - Left Aligned with Rounded Elements */}
        <ExploreFilter />

        <div className="mt-9 flex w-full max-w-[500px] gap-2 text-center text-lg text-[#cfcfcf]">
          <p className="text-lg font-semibold text-[#ECECEC]">
            Popular Places:
          </p>{" "}
          Bali, Istanbul, Rome, Paris
        </div>
      </div>
    </section>
  );
}
