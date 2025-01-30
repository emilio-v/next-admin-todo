import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link
            href="#"
            title="home"
            className="flex flex-row gap-1 items-center"
          >
            <Image
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              width={48}
              height={38}
              alt="tailus logo"
            />
            <span className="text-xl">Admin Todo</span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
            className="m-auto rounded-full object-cover"
            width={112}
            height={112}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          <SidebarItem
            href="#"
            label="Dashboard"
            Icon={CiBookmarkCheck}
            isActive
          />
          <SidebarItem href="#" label="Categories" Icon={CiBookmarkCheck} />
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
