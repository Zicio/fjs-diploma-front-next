"use client";

import { linkItem } from "@/app/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const commonNavItems: linkItem[] = [
  {
    url: "/",
    text: "На главную",
  },
  {
    url: "/hotels/rooms",
    text: "Поиск номера",
  },
];

const clientNavItems: linkItem[] = [
  ...commonNavItems,
  {
    url: "/client/{id}/reservation", //TODO
    text: "Мои брони",
  },
];

const adminNavItems: linkItem[] = [
  ...clientNavItems,
  {
    url: "/admin/hotels",
    text: "Все гостиницы",
  },
  {
    url: "/admin/hotels/new",
    text: "Добавить гостиницу",
  },
  {
    url: "/admin/users",
    text: "Все пользователи",
  },
  {
    url: "/admin/users/new",
    text: "Добавить пользователя",
  },
];

const managerNavItems: linkItem[] = [
  ...clientNavItems,
  {
    url: "/manager/users",
    text: "Все пользователи",
  },
];

type role = "client" | "admin" | "manager";

type accessToken = {
  id: string;
  email: string;
  name: string;
  role: role;
};

const Navbar = () => {
  const pathname = usePathname();
  const [rolesSet, setRolesSet] = useState<linkItem[]>(commonNavItems);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log({ token });
    if (token) {
      const { role }: accessToken = JSON.parse(token);
      switch (role) {
        case "client":
          setRolesSet(clientNavItems);
          break;
        case "admin":
          setRolesSet(adminNavItems);
          break;
        case "manager":
          setRolesSet(managerNavItems);
          break;
      }
    }
  }, []);
  return (
    <nav className="p-default border border-gray_lite rounded-default bg-gray">
      <ul>
        {rolesSet.map(({ url, text }) => (
          <li key={url} className="border-b border-gray_lite last:border-0">
            <Link
              href={url}
              className={`${
                pathname === url
                  ? "opacity-50 cursor-default pointer-events-none"
                  : "bg-opacity-100 hover:bg-yellow hover:text-black"
              } inline-block w-full h-full p-sm`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
