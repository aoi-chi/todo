export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  reminderShown?: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TodoFormData {
  title: string;
  description?: string;
  dueDate?: string;
}
