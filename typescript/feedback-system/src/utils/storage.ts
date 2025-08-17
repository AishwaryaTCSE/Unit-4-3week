import type { Feedback } from "../types";

const KEY = "feedback_entries_v1";

export function loadFeedback(): Feedback[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Feedback[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFeedback(list: Feedback[]): void {
  localStorage.setItem(KEY, JSON.stringify(list));
}
