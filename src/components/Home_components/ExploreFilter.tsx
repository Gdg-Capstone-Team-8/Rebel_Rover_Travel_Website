import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import PopoverDate from "./PopoverDate";
import { Button } from "@/components/ui/button";

const ExploreFilter = () => {
  return (
    <div className="mt-4 flex max-w-[300px] sm:max-w-[700px] flex-wrap gap-y-4 rounded-2xl items-center sm:rounded-full bg-white p-2 text-xs">
      {/* Location */}
      <div className="flex-1">
        <Select>
          <SelectTrigger className="w-full border-none bg-transparent py-2 text-xs text-gray-800 shadow-none focus:outline-none">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="loc">Location</SelectItem>
            <SelectItem value="bali">Bali</SelectItem>
            <SelectItem value="paris">Paris</SelectItem>
            <SelectItem value="tokyo">Tokyo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Divider */}
      <div className="h-5 w-px bg-gray-300"></div>

      {/* Date */}
      <div className="flex-1 *:w-full">
        <PopoverDate />
      </div>

      {/* Divider */}
      <div className="h-5 w-px bg-gray-300"></div>

      {/* People */}
      <div className="flex-1">
        <Select>
          <SelectTrigger className="w-full border-none bg-transparent py-2 text-xs text-gray-800 shadow-none focus:outline-none">
            <SelectValue placeholder="People" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="peo">People</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Explore Button */}
      <Button className="font-semiBold cursor-pointer rounded-full hover:opacity-65 sm:py-6 sm:text-xl">
        Explore Now
      </Button>
    </div>
  );
};

export default ExploreFilter;
