'use client';

import { useTodos } from '@/hooks/useTodos';
import { useReminder } from '@/hooks/useReminder';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import TodoFilter from '@/components/TodoFilter';
import ReminderNotification from '@/components/ReminderNotification';

export default function Home() {
  const {
    todos,
    allTodos,
    filter,
    setFilter,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    isLoaded,
  } = useTodos();

  const { reminders, dismissReminder } = useReminder(allTodos, updateTodo);

  if (!isLoaded) {
    return <div className="flex justify-center items-center min-h-screen">読み込み中...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          TODOアプリ
        </h1>

        <ReminderNotification reminders={reminders} onDismiss={dismissReminder} />

        <TodoForm onSubmit={addTodo} />

        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={todos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      </div>
    </main>
  );
}
