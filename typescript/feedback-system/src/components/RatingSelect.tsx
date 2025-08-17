import React from "react";
import type { Rating } from "../types";
import { ratingOptions } from "../utils/rating";

interface Props {
  id: string;
  label: string;
  value: Rating;
  onChange: (value: Rating) => void;
}

const RatingSelect: React.FC<Props> = ({ id, label, value, onChange }) => {
  return (
    <label className="field">
      <span>{label}</span>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) as Rating)}
      >
        {ratingOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
};

export default RatingSelect;
