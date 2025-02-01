import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/v1/NewTodo";
import { TodosGrid } from "@/todos/components/v1/TodosGrid";

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { updatedAt: "desc" } });

  return (
    <div>
      <div className="mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
