import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  PencilSquareIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { SidebarItem } from "@/components/v2/SidebarItem";

const navigation = [
  { name: "Dashboard", href: "/v2/dashboard", icon: HomeIcon },
  { name: "Todos", href: "/v2/dashboard/rest-todos", icon: PencilSquareIcon },
  { name: "Team", href: "#", icon: UsersIcon },
  { name: "Projects", href: "#", icon: FolderIcon },
  { name: "Calendar", href: "#", icon: CalendarIcon },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon },
  { name: "Reports", href: "#", icon: ChartPieIcon },
];

export const Navigation = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map(({ href, icon, name }) => (
              <li key={name}>
                <SidebarItem href={href} name={name} icon={icon} />
              </li>
            ))}
          </ul>
        </li>
        <li className="-mx-6 mt-auto hidden lg:flex">
          <Link
            href="#"
            className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
          >
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full bg-gray-800"
              width={32}
              height={32}
            />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
