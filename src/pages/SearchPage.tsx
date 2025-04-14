import DestinationCard from "@/components/PackagePage/DestinationCard";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import useDestinations from "@/hooks/useDestinations";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { destinations, isLoading } = useDestinations();

  const filteredDestinations = useMemo(
    () =>
      destinations?.filter((des) =>
        des.country.toLocaleLowerCase().includes(searchQuery),
      ),
    [searchQuery],
  );

  return (
    <div className="flex flex-col items-center pt-32">
      <div className="max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Explore Destinations</h1>
          <p className="mt-2 text-gray-600">Discover your next adventure</p>
        </div>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search with Country"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 pl-10"
          />
          <Search className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around gap-12 p-12 xl:justify-between">
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

        {filteredDestinations &&
          filteredDestinations.map((des, index) => (
            <DestinationCard destination={des} key={index} />
          ))}

        {!destinations && !isLoading && (
          <div className="text-red-300">Please Check Your Internet!</div>
        )}

        {filteredDestinations?.length == 0 && (
          <div className="text-black">No Destination with such country</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
