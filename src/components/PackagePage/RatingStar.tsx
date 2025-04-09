import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useState } from "react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

const RatingStars = ({
  rating,
  maxRating = 5,
  size = 20,
  interactive = false,
  onChange,
  className,
}: RatingStarsProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    if (!interactive) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (!interactive) return;
    onChange?.(index);
  };

  return (
    <div
      className={cn("flex items-center", className)}
      role={interactive ? "radiogroup" : "presentation"}
      aria-label={
        interactive ? "Rating" : `Rating: ${rating} out of ${maxRating}`
      }
    >
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverRating || rating);
        const isHalfFilled =
          !isActive && starValue <= rating + 0.5 && starValue > rating;

        return (
          <button
            key={index}
            type={interactive ? "button" : undefined}
            className={cn(
              "relative cursor-default transition-colors",
              interactive && "cursor-pointer hover:scale-110",
              isActive ? "text-yellow-400" : "text-gray-300",
            )}
            style={{ width: size, height: size }}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
            disabled={!interactive}
            aria-checked={interactive ? starValue === rating : undefined}
            role={interactive ? "radio" : undefined}
            aria-label={interactive ? `${starValue} stars` : undefined}
          >
            <Star
              fill={
                isActive ? "currentColor" : isHalfFilled ? "url(#half)" : "none"
              }
              size={size}
              strokeWidth={1.5}
            />

            {isHalfFilled && (
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
