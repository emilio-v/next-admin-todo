import { NextRequest, NextResponse } from "next/server";
import { todo as PrismaTodo } from "@prisma/client";
import * as yup from "yup";

import prisma from "@/lib/prisma";

interface Args {
  params: {
    id: string;
  };
}

const invalidUUIDError = () =>
  NextResponse.json(
    {
      message: "Invalid uuid",
    },
    { status: 400 }
  );

const todoNotFoundError = () =>
  NextResponse.json(
    {
      message: "Todo not found",
    },
    { status: 404 }
  );

const getTodo = async (id: string): Promise<PrismaTodo | null> => {
  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  return todo;
};

export async function GET(request: NextRequest, { params }: Args) {
  const { id } = await params;

  if (!id) {
    return invalidUUIDError();
  }

  const todo = await getTodo(id);

  if (!todo) {
    return todoNotFoundError();
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: NextRequest, { params }: Args) {
  const { id } = await params;

  if (!id) {
    return invalidUUIDError();
  }

  const todo = await getTodo(id);

  if (!todo) {
    return todoNotFoundError();
  }

  try {
    const { complete, description } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: {
        id: todo.id,
      },
      data: {
        complete,
        description,
      },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
