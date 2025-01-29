import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const max = Number(searchParams.get("max") ?? "20");

  if (isNaN(max)) {
    return NextResponse.json(
      {
        message: "Invalid query param",
      },
      { status: 400 }
    );
  }

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: Array.from({ length: max }).map(() => ({
      description: faker.lorem.lines({ min: 1, max: 3 }),
      complete: faker.datatype.boolean(),
    })),
  });

  return NextResponse.json({
    message: "Seed Executed",
  });
}
