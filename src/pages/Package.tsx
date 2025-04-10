import DestinationCard from "@/components/PackagePage/DestinationCard";
import TipArticleCard from "@/components/PackagePage/TipArticleCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useDestinations from "@/hooks/useDestinations";
import { ChevronRight } from "lucide-react";

const Package = () => {
  const { isLoading, destinations } = useDestinations();

  return (
    <div>
      {/*The image with a text*/}
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[url(@/assets/Package/unsplash_dHHhDXaCh70.svg)] bg-cover bg-right bg-no-repeat">
        <h1 className="text-4xl font-bold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-6xl">
          Travel Packages
        </h1>
        <p className="flex items-center gap-1 text-xl font-semibold text-white drop-shadow-xl drop-shadow-[#11111196] md:text-3xl">
          Home <ChevronRight size={40} /> Package
        </p>
      </div>

      {/*Popular destination */}
      <div className="px-6 py-30 md:px-16">
        <h1 className="mb-[14px] text-4xl font-semibold md:text-6xl">
          Popular Destination
        </h1>
        <div className="mb-16 flex flex-wrap items-center justify-between gap-y-8">
          <p className="max-w-[577px] text-sm text-[#878787]">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel packages.
          </p>
          <Button className="cursor-pointer rounded-full px-6 py-7 text-xl font-semibold hover:opacity-60 active:opacity-80">
            Discover more
          </Button>
        </div>

        {/*Card display*/}
        <div className="flex flex-wrap justify-around gap-12 xl:justify-between">
          {isLoading &&
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-[647px] w-[444px] rounded-lg"
                children={
                  <Skeleton className="h-[319px] rounded-b-none bg-gray-200" />
                }
              />
            ))}

          {destinations &&
            destinations
              .slice(0, 9)
              .map((des, index) => (
                <DestinationCard destination={des} key={index} />
              ))}
        </div>
      </div>

      {/* Plane display */}
      <div className="h-100 w-full bg-[url(@/assets/Package/plane.jpg)] bg-cover bg-top bg-no-repeat" />

      {/* Tips And Tricks */}
      <div className="px-6 py-30 md:px-16">
        <h1 className="mb-[14px] text-4xl font-semibold md:text-6xl">
          Tips &amp; Article
        </h1>
        <div className="mb-16 flex flex-wrap items-center justify-between gap-y-8">
          <p className="max-w-[577px] text-sm text-[#878787]">
            Discover valuable tips and tricks to enhance your travel experiences
            and make the most of your adventures.
          </p>
          <Button className="cursor-pointer rounded-full px-6 py-7 text-xl font-semibold hover:opacity-60 active:opacity-80">
            View more
          </Button>
        </div>

        {/*Card display*/}
        <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-[60px]">
          <TipArticleCard
            topic="Perfect | Tips"
            title="9 Popular Travel Destintion on Sale in 2022 -"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
          <TipArticleCard
            image="src/assets/Package/family.jpg"
            className="md:row-span-2 xl:col-span-2"
            topic="Stories | Tips"
            title="Travel Stories For Now and the Future"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
          <TipArticleCard
            topic="Tips | Travel"
            title="How Are We Going to Travel in 2022 -"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
          />
        </div>
      </div>

    
    </div>
  );
};

export default Package;
