import { Rating } from "../types";

export const ratingLabel = (r: Rating) => {
  switch (r) {
    case Rating.POOR: return "Poor";
    case Rating.AVERAGE: return "Average";
    case Rating.GOOD: return "Good";
    case Rating.VERY_GOOD: return "Very Good";
    case Rating.EXCELLENT: return "Excellent";
    default: return String(r);
  }
};

export const ratingOptions: { value: Rating; label: string }[] = [
  { value: Rating.POOR, label: ratingLabel(Rating.POOR) },
  { value: Rating.AVERAGE, label: ratingLabel(Rating.AVERAGE) },
  { value: Rating.GOOD, label: ratingLabel(Rating.GOOD) },
  { value: Rating.VERY_GOOD, label: ratingLabel(Rating.VERY_GOOD) },
  { value: Rating.EXCELLENT, label: ratingLabel(Rating.EXCELLENT) },
];
