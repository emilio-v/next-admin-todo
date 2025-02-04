"use client";

import { todo as PrismaTodo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";

interface TodoItemProps {
  todo: PrismaTodo;
  toggleTodo: (id: string, complete: boolean) => Promise<PrismaTodo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-row sm:flex-row justify-start items-center gap-4">
        <div
          onClick={onToggleTodo}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          {todoOptimistic.complete && <IoCheckboxOutline size={30} />}
          {!todoOptimistic.complete && <IoSquareOutline size={30} />}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
