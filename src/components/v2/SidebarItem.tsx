"use client";

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
}

export const SidebarItem = ({ href, icon, name }: SidebarItemProps) => {
  const pathname = usePathname();
  const current = pathname === href;

  const Icon = icon;
  return (
    <Link
      href={href}
      className={clsx(
        current
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white",
        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
      )}
    >
      <Icon aria-hidden="true" className="size-6 shrink-0" />
      {name}
    </Link>
  );
};
