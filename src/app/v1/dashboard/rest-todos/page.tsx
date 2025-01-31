import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos/components/v1/TodosGrid";

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
