import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { lusitana } from "../fonts";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href={"/"}>
        <Image src={logo} alt="Логотип" />
      </Link>
      <h1
        className={`${lusitana.className} text-yellow-200 text-2xl border-l-2 border-gray-700 pl-4`}
      >
        Farada
      </h1>
    </div>
  );
};
export default Logo;
