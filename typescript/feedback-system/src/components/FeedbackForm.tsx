import React, { useState } from "react";
import { Rating, type Feedback } from "../types";
import RatingSelect from "./RatingSelect";

interface Props {
  onSubmit: (fb: Feedback) => void;
}

const initialDate = new Date().toISOString().slice(0, 10);

const FeedbackForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [visitDate, setVisitDate] = useState<string>(initialDate);
  const [serviceRating, setServiceRating] = useState<Rating>(Rating.GOOD);
  const [foodRating, setFoodRating] = useState<Rating>(Rating.GOOD);
  const [ambianceRating, setAmbianceRating] = useState<Rating>(Rating.GOOD);
  const [cleanlinessRating, setCleanlinessRating] = useState<Rating>(Rating.GOOD);
  const [comments, setComments] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    if (!visitDate) e.visitDate = "Visit date is required";
    if (comments.trim().length < 5) e.comments = "Comments should be at least 5 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const fb: Feedback = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      visitDate,
      serviceRating,
      foodRating,
      ambianceRating,
      cleanlinessRating,
      comments: comments.trim(),
      createdAt: new Date().toISOString(),
    };
    onSubmit(fb);
    setSubmitted(true);

    // Reset form
    setName("");
    setEmail("");
    setVisitDate(initialDate);
    setServiceRating(Rating.GOOD);
    setFoodRating(Rating.GOOD);
    setAmbianceRating(Rating.GOOD);
    setCleanlinessRating(Rating.GOOD);
    setComments("");
    setErrors({});
    setTimeout(() => setSubmitted(false), 2200);
  };

  return (
    <form className="card" onSubmit={handleSubmit} noValidate>
      <h2>Leave your feedback</h2>

      <label className="field">
        <span>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <em className="error">{errors.name}</em>}
      </label>

      <label className="field">
        <span>Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <em className="error">{errors.email}</em>}
      </label>

      <label className="field">
        <span>Date of Visit</span>
        <input type="date" value={visitDate} onChange={(e) => setVisitDate(e.target.value)} />
        {errors.visitDate && <em className="error">{errors.visitDate}</em>}
      </label>

      <div className="grid-2">
        <RatingSelect id="service"   label="Service"     value={serviceRating}     onChange={setServiceRating} />
        <RatingSelect id="food"      label="Food"        value={foodRating}        onChange={setFoodRating} />
        <RatingSelect id="ambiance"  label="Ambiance"    value={ambianceRating}    onChange={setAmbianceRating} />
        <RatingSelect id="cleanliness" label="Cleanliness" value={cleanlinessRating} onChange={setCleanlinessRating} />
      </div>

      <label className="field">
        <span>Comments</span>
        <textarea rows={4} value={comments} onChange={(e) => setComments(e.target.value)} />
        {errors.comments && <em className="error">{errors.comments}</em>}
      </label>

      <button type="submit" className="btn">Submit Feedback</button>
      {submitted && <p className="success">Thank you! Your feedback was submitted.</p>}
    </form>
  );
};

export default FeedbackForm;
