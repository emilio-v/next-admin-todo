"use client";

import { todo as PrismaTodo } from "@prisma/client";

import { toggleTodo } from "@/todos/actions/todo-actions";
import { TodoItem } from "@/todos/components/v1/TodoItem";

interface TodosGridProps {
  todos?: PrismaTodo[];
}

export const TodosGrid = ({ todos }: TodosGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
