import React, { useState } from "react";
import { FeedbackFormState } from "./types"; // correct path

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormState>({
    name: "",
    email: "",
    rating: 0,
    feedback: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FeedbackFormState) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.rating || !formData.feedback) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", rating: 0, feedback: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Feedback Form</h2>

      {submitted && <p style={{ color: "green" }}>Thank you! Your feedback has been submitted.</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Rating (1-5):</label><br />
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} min={1} max={5} />
        </div>
        <div>
          <label>Feedback:</label><br />
          <textarea name="feedback" value={formData.feedback} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
