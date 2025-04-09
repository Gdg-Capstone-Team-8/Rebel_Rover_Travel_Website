import Destination from "@/models/Destination";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import RatingStars from "./RatingStar";

const DestinationCard = ({
  destination: { name, country, description, image, price },
}: {
  destination: Destination;
}) => {
  const imageUrl = (imgNum: string) =>
    `src/assets/Package/images/${imgNum}.jpg`;

  const rating = Math.random() * 2 + 3;

  return (
    <Card className="group pt-0 shadow-xl">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={imageUrl(image)}
          alt={name}
          className="h-[319px] w-[444px] bg-cover duration-300 group-hover:scale-120"
        />
      </div>
      <CardHeader className="flex-2">
        <CardTitle className="mb-7 flex items-center justify-between">
          <div className="text-xl font-semibold break-words md:text-2xl">
            {country}
          </div>
          <div className="text-xl font-[400] break-words md:text-2xl">
            {price}/3days
          </div>
        </CardTitle>
        <CardDescription className="text-sm text-[#555]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="h-[inherit] w-full flex-1 items-center justify-between">
        <RatingStars rating={rating} />
        <Button className="cursor-pointer rounded-full px-6 py-7 text-xl font-semibold hover:opacity-60 active:opacity-80">
          Book now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
