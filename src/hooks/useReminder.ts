'use client';

import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';
import { dateUtils } from '@/utils/dateUtils';

export function useReminder(todos: Todo[], updateTodo: (id: string, updates: Partial<Todo>) => void) {
  const [reminders, setReminders] = useState<Todo[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newReminders: Todo[] = [];

      todos.forEach((todo) => {
        if (
          !todo.completed &&
          todo.dueDate &&
          !todo.reminderShown &&
          dateUtils.isDueSoon(todo.dueDate)
        ) {
          newReminders.push(todo);
          updateTodo(todo.id, { reminderShown: true });
        }
      });

      if (newReminders.length > 0) {
        setReminders(newReminders);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [todos, updateTodo]);

  const dismissReminder = (id: string) => {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
  };

  return { reminders, dismissReminder };
}
