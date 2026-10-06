import { Star } from "lucide-react";

const stars = ["first", "second", "third", "fourth", "fifth"];

export default function StarRating({ rating }: { rating?: number }) {
  return (
    <div
      aria-label={`${rating ?? 5} out of 5 stars`}
      className="stars"
      role="img"
    >
      {stars.map((star) => (
        <Star
          aria-hidden="true"
          fill="currentColor"
          key={star}
          size="1em"
          strokeWidth={0}
        />
      ))}
      {rating === undefined ? null : <span>{rating}</span>}
    </div>
  );
}
