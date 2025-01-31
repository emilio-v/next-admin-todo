"use client";

import { todo as PrismaTodo } from "@prisma/client";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface TodoItemProps {
  todo: PrismaTodo;
  updateTodod: (id: string, complete: boolean) => Promise<PrismaTodo | void>;
}

export const TodoItem = ({ todo, updateTodod }: TodoItemProps) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-row sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => updateTodod(todo.id, !todo.complete)}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todo.complete ? "bg-blue-100" : "bg-red-100"
          }`}
        >
          {todo.complete && <IoCheckboxOutline size={30} />}
          {!todo.complete && <IoSquareOutline size={30} />}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
