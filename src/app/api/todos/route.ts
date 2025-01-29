import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json(
      {
        message: "Invalid query param",
      },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const { complete, description } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({
      data: { description, complete },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
