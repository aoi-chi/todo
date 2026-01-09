'use client';

import { Todo } from '@/types/todo';
import { dateUtils } from '@/utils/dateUtils';

interface ReminderNotificationProps {
  reminders: Todo[];
  onDismiss: (id: string) => void;
}

export default function ReminderNotification({ reminders, onDismiss }: ReminderNotificationProps) {
  if (reminders.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {reminders.map((reminder) => (
        <div
          key={reminder.id}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded shadow-lg max-w-sm animate-slide-in"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-yellow-800">リマインダー</h4>
              <p className="text-sm text-yellow-700 mt-1">{reminder.title}</p>
              {reminder.dueDate && (
                <p className="text-xs text-yellow-600 mt-1">
                  期限: {dateUtils.formatDueDate(reminder.dueDate)}
                </p>
              )}
            </div>
            <button
              onClick={() => onDismiss(reminder.id)}
              className="text-yellow-700 hover:text-yellow-900 ml-4"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
