import { todo as PrismaTodo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<PrismaTodo> => {
  const body = { complete };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const createTodo = async (description: string): Promise<PrismaTodo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};
