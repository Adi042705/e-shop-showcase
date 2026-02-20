import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
}

const StarRating = ({ rating, reviewCount }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.round(rating)
                ? "fill-star text-star"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-muted-foreground">
        {rating}
        {reviewCount !== undefined && ` (${reviewCount})`}
      </span>
    </div>
  );
};

export default StarRating;
