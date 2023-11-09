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
    <ul className="absolute right-5 top-5 z-10 bg-gray p-2 border border-gray_lite rounded-default text-left text-xs">
      {menuItems.map((item) => (
        <li
          key={item.url}
          className="border-b border-gray_lite last:border-0 hover:bg-yellow hover:text-black"
        >
          <Link
            href={`/auth/${item.url}`}
            className="inline-block w-full h-full p-default"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ProfileMenu;
