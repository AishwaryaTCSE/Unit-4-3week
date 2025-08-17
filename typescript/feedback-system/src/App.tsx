import React, { useEffect, useMemo, useState } from "react";
import { type Feedback, type Filters, Rating } from "./types";
import { loadFeedback, saveFeedback } from "./utils/storage";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackFilters from "./components/FeedbackFilters";
import "./App.css";

const App: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback[]>(() => loadFeedback());
  const [filters, setFilters] = useState<Filters>({
    query: "",
    minRating: 0,
    sortBy: "newest",
  });

  useEffect(() => {
    saveFeedback(feedback);
  }, [feedback]);

  const addFeedback = (fb: Feedback) => {
    setFeedback((prev) => [fb, ...prev]);
  };

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const withOverall = feedback.map((f) => {
      const overall =
        (f.serviceRating + f.foodRating + f.ambianceRating + f.cleanlinessRating) / 4;
      return { f, overall };
    });

    let result = withOverall.filter(({ f, overall }) => {
      const passRating = filters.minRating ? overall >= filters.minRating : true;
      const text = `${f.name} ${f.email} ${f.comments}`.toLowerCase();
      const passQuery = q ? text.includes(q) : true;
      return passRating && passQuery;
    });

    if (filters.sortBy === "newest") {
      result.sort((a, b) => b.f.createdAt.localeCompare(a.f.createdAt));
    } else if (filters.sortBy === "oldest") {
      result.sort((a, b) => a.f.createdAt.localeCompare(b.f.createdAt));
    } else if (filters.sortBy === "rating") {
      result.sort((a, b) => b.overall - a.overall);
    }

    return result.map((r) => r.f);
  }, [feedback, filters]);

  return (
    <div className="container">
      <header className="header">
        <h1>Aromatic Bar — Feedback & Grievance</h1>
      </header>

      <main className="grid">
        <section>
          <FeedbackForm onSubmit={addFeedback} />
        </section>
        <aside>
          <FeedbackFilters value={filters} onChange={setFilters} />
        </aside>
      </main>

      <section>
        <FeedbackList items={filtered} />
      </section>

      <footer className="footer">
        <small>
          Built with React + TypeScript • Local persistence • Validation • Filtering/Sorting
        </small>
      </footer>
    </div>
  );
};

export default App;
