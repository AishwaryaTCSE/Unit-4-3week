// Enums + interfaces used across the app

export enum Rating {
  POOR = 1,
  AVERAGE = 2,
  GOOD = 3,
  VERY_GOOD = 4,
  EXCELLENT = 5,
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  visitDate: string; // ISO yyyy-mm-dd
  serviceRating: Rating;
  foodRating: Rating;
  ambianceRating: Rating;
  cleanlinessRating: Rating;
  comments: string;
  createdAt: string; // ISO timestamp
}

export interface Filters {
  query: string;           // search in name/email/comments
  minRating: Rating | 0;   // 0 -> no minimum
  sortBy: "newest" | "oldest" | "rating";
}
