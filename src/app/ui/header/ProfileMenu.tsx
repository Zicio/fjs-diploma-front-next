import { linkItem } from "@/app/types/types";
import Link from "next/link";

const menuItems: linkItem[] = [
  { url: "signIn", text: "Войти" },
  { url: "signUp", text: "Зарегистрироваться" },
];

const ProfileMenu = () => {
  return (
    <ul className="absolute right-5 top-5 z-10 bg-gray p-default border border-gray_lite rounded-default text-left text-sm">
      {menuItems.map((item) => (
        <li
          key={item.url}
          className="border-b border-gray_lite last:border-0 hover:bg-yellow hover:text-black"
        >
          <Link
            href={`/auth/${item.url}`}
            className="inline-block w-full h-full p-sm"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ProfileMenu;
