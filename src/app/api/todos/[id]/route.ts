import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Args {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Args) {
  const id = await params;

  if (!id) {
    return NextResponse.json(
      {
        message: "Invalid uuid",
      },
      { status: 400 }
    );
  }

  const todo = await prisma.todo.findUnique({
    where: id,
  });

  if (!todo) {
    return NextResponse.json(
      {
        message: "Todo not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}
