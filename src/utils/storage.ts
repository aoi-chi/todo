import { Todo } from '@/types/todo';

const STORAGE_KEY = 'todos';

export const storageUtils = {
  getTodos: (): Todo[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    return JSON.parse(data, (key, value) => {
      if (key === 'dueDate' || key === 'createdAt' || key === 'updatedAt') {
        return value ? new Date(value) : undefined;
      }
      return value;
    });
  },

  saveTodos: (todos: Todo[]): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },

  clearTodos: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
};
