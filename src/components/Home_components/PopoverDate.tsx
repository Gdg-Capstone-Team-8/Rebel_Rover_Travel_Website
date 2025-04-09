import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";

const PopoverDate = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between border-none bg-transparent py-2 text-xs text-gray-800 shadow-none hover:bg-transparent focus:outline-none",
            !date && "text-muted-foreground",
          )}
        >
          {date ? format(date, "PPP") : <span>Date</span>}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDate;
