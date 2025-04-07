import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  image?: string;
  topic: string;
  title: string;
  description: string;
  className?: string;
}

const TipArticleCard = ({
  image,
  description,
  topic,
  title,
  className,
}: Props) => {
  return (
    <Card className={cn("group pt-0 shadow-xl", className)}>
      {image ? (
        <div
          className="min-h-[319px] w-full flex-2 overflow-hidden rounded-t-lg bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="flex-2"></div>
      )}

      <CardHeader className={cn("flex-none", image && "px-12")}>
        <CardTitle className="mb-7">
          <div className="py-3 text-xl font-[400] break-words md:text-2xl">
            {topic}
          </div>
          <div className="text-2xl font-[500] break-words md:text-4xl">
            {title}
          </div>
        </CardTitle>
        <CardDescription className="mb-7 text-[#555]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter
        className={cn(
          "h-[inherit] w-full flex-none items-center justify-start",
          image && "px-12",
        )}
      >
        <Button className="cursor-pointer rounded-full px-6 py-7 text-xl font-semibold hover:opacity-60 active:opacity-80">
          Read more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TipArticleCard;
