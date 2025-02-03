"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/v2/Sidebar";
import { TopMenu } from "@/components/v2/TopMenu";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar />
      <TopMenu />

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
