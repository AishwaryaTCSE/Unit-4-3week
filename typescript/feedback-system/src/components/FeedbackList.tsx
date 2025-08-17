import React from "react";
import type { Feedback } from "../types";
import { ratingLabel } from "../utils/rating";

interface Props {
  items: Feedback[];
}

const FeedbackList: React.FC<Props> = ({ items }) => {
  if (!items.length) {
    return <div className="card"><p>No feedback yet.</p></div>;
  }

  return (
    <div className="card">
      <h3>All Feedback</h3>
      <div className="table">
        <div className="thead">
          <div>Name</div>
          <div>Email</div>
          <div>Visit</div>
          <div>Service</div>
          <div>Food</div>
          <div>Ambiance</div>
          <div>Cleanliness</div>
          <div>Comments</div>
          <div>Submitted</div>
        </div>
        {items.map((f) => (
          <div className="trow" key={f.id}>
            <div>{f.name}</div>
            <div>{f.email}</div>
            <div>{f.visitDate}</div>
            <div>{ratingLabel(f.serviceRating)}</div>
            <div>{ratingLabel(f.foodRating)}</div>
            <div>{ratingLabel(f.ambianceRating)}</div>
            <div>{ratingLabel(f.cleanlinessRating)}</div>
            <div className="comments">{f.comments}</div>
            <div>{new Date(f.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
