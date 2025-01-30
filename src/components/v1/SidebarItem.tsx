"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarItemProps {
  href: string;
  label: string;
  Icon: ReactNode;
}

export const SidebarItem = ({ Icon, href, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          isActive && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        }`}
      >
        {Icon}
        <span className="-mr-1 font-medium">{label}</span>
      </Link>
    </li>
  );
};
