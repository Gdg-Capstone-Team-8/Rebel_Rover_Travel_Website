import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import PopoverDate from "./PopoverDate";
import { Button } from "@/components/ui/button";

const ExploreFilter = () => {
  return (
    <div className="mt-4 flex w-[calc(100%-16px)]  items-center justify-between gap-0.5 rounded-2xl bg-white p-1.5 text-xs sm:max-w-[700px] sm:gap-2 sm:rounded-full sm:p-2">
      {/* Location */}
      <div className="flex-1 min-w-[90px] max-w-[110px] sm:max-w-none sm:flex-auto">
        <Select>
          <SelectTrigger className="border-none bg-transparent p-1 text-[0.7rem] text-gray-800 shadow-none focus:outline-none sm:p-2 sm:text-sm">
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

      {/*  Divider */}
      <div className="h-4 w-[0.5px] bg-gray-200 flex-shrink-0"></div>

      {/* Date  */}
      <div className="flex-1 min-w-[80px] max-w-[100px] sm:max-w-none sm:flex-auto">
        <PopoverDate />
      </div>

      {/*  Divider */}
      <div className="h-4 w-[0.5px] bg-gray-200 flex-shrink-0"></div>

      {/* People  */}
      <div className="flex-1 min-w-[60px] max-w-[80px] sm:max-w-none sm:flex-auto">
        <Select>
          <SelectTrigger className="border-none bg-transparent p-1 text-[0.7rem] text-gray-800 shadow-none focus:outline-none sm:p-2 sm:text-sm">
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
      <Button className="flex-shrink-0 rounded-full px-2 py-1 text-[0.7rem] hover:opacity-65 sm:px-4 sm:py-2 sm:text-sm">
        Explore Now
      </Button>
    </div>
  );
};

export default ExploreFilter;
