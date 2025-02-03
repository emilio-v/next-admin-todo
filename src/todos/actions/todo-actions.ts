"use server";

import { revalidatePath } from "next/cache";
import { todo as PrismaTodo } from "@prisma/client";
import prisma from "@/lib/prisma";

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<PrismaTodo> => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    throw new Error(`Todo with id ${id} not found`);
  }

  const updatedTodo = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      complete,
    },
  });

  revalidatePath("/v1/dashboard/server-todos");

  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: { description },
    });

    revalidatePath("/v1/dashboard/server-todos");

    return todo;
  } catch {
    return {
      message: "Error creating Todo",
    };
  }
};
