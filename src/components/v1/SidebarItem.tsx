import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  href: string;
  label: string;
  Icon: IconType;
  isActive?: boolean;
}

export const SidebarItem = ({
  Icon,
  href,
  label,
  isActive,
}: SidebarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          isActive && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        }`}
      >
        <Icon size={30} />
        <span className="-mr-1 font-medium">{label}</span>
      </Link>
    </li>
  );
};
