"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

import { addTodo, deleteCompleted } from "@/todos/actions/todo-actions";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (description.trim().length === 0) return;

    await addTodo(description);

    setDescription("");
  };

  return (
    <form className="flex flex-row w-full" onSubmit={onSubmit}>
      <input
        type="text"
        className="w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 py-2 px-4 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 py-2 px-4 text-white hover:bg-red-700 transition-all gap-1"
      >
        <IoTrashOutline />
        Delete Completed
      </button>
    </form>
  );
};
