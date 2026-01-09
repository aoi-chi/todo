'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import { dateUtils } from '@/utils/dateUtils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, { title: editTitle });
      setIsEditing(false);
    }
  };

  const getDueDateColor = () => {
    if (!todo.dueDate) return '';
    if (dateUtils.isOverdue(todo.dueDate)) return 'text-red-500';
    if (dateUtils.isDueSoon(todo.dueDate)) return 'text-orange-500';
    return 'text-gray-500';
  };

  return (
    <div className={`bg-white rounded-lg shadow p-4 mb-3 ${todo.completed ? 'opacity-60' : ''}`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 cursor-pointer"
        />

        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
              className="w-full px-2 py-1 border border-gray-300 rounded"
              autoFocus
            />
          ) : (
            <h3
              className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
              onDoubleClick={() => setIsEditing(true)}
            >
              {todo.title}
            </h3>
          )}

          {todo.description && (
            <p className="text-gray-600 text-sm mt-1">{todo.description}</p>
          )}

          {todo.dueDate && (
            <p className={`text-sm mt-2 ${getDueDateColor()}`}>
              期限: {dateUtils.formatDueDate(todo.dueDate)}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 px-2"
          >
            編集
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700 px-2"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
}
