export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export interface Task {
  id: string;
  description: string;
  priority: Priority;
  completed: boolean;
}
