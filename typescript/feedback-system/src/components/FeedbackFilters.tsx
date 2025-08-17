import React from "react";
import type { Filters } from "../types";
import { Rating } from "../types";
import { ratingLabel } from "../utils/rating";

interface Props {
  value: Filters;
  onChange: (f: Filters) => void;
}

const FeedbackFilters: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="card">
      <h3>Filters</h3>
      <div className="filters">
        <label className="field">
          <span>Search</span>
          <input
            placeholder="name, email, comments..."
            value={value.query}
            onChange={(e) => onChange({ ...value, query: e.target.value })}
          />
        </label>

        <label className="field">
          <span>Min Overall Rating</span>
          <select
            value={value.minRating}
            onChange={(e) => onChange({ ...value, minRating: Number(e.target.value) as any })}
          >
            <option value={0}>Any</option>
            <option value={Rating.POOR}>{ratingLabel(Rating.POOR)}</option>
            <option value={Rating.AVERAGE}>{ratingLabel(Rating.AVERAGE)}</option>
            <option value={Rating.GOOD}>{ratingLabel(Rating.GOOD)}</option>
            <option value={Rating.VERY_GOOD}>{ratingLabel(Rating.VERY_GOOD)}</option>
            <option value={Rating.EXCELLENT}>{ratingLabel(Rating.EXCELLENT)}</option>
          </select>
        </label>

        <label className="field">
          <span>Sort By</span>
          <select
            value={value.sortBy}
            onChange={(e) => onChange({ ...value, sortBy: e.target.value as Filters["sortBy"] })}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Highest Rating</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FeedbackFilters;
