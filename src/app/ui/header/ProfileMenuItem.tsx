import Link from "next/link";
import { FC } from "react";

type TypeAuth = "signIn" | "signUp";

enum profileMenuEnum {
  signIn = "Войти",
  signUp = "Зарегистрироваться",
}

const ProfileMenuItem: FC<{ type: TypeAuth }> = ({ type }) => {
  return (
    <li className="m-2 border-b-2 border-gray-700 last:border-0 hover:bg-yellow-300 hover:text-black">
      <Link href={`/auth/${type}`} className="inline-block w-full h-full p-2">
        {profileMenuEnum[type]}
      </Link>
    </li>
  );
};
export default ProfileMenuItem;
