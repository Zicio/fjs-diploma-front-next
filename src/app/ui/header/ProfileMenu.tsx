import Link from "next/link";

type menuItem = {
  url: string;
  text: string;
};

const menuItems: menuItem[] = [
  { url: "signIn", text: "Войти" },
  { url: "signUp", text: "Зарегистрироваться" },
];

const ProfileMenu = () => {
  return (
    <ul className="absolute right-5 top-5 z-10 bg-gray-800 p-2 border-2 border-gray-700 rounded-md text-left text-xs">
      {menuItems.map((item) => (
        <li
          key={item.url}
          className="m-2 border-b-2 border-gray-700 last:border-0 hover:bg-yellow-300 hover:text-black"
        >
          <Link
            href={`/auth/${item.url}`}
            className="inline-block w-full h-full p-2"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ProfileMenu;
