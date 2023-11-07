import Image from "next/image";
import logo from "../../../../public/logo.svg";
import { lusitana } from "../fonts";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Image src={logo} alt="Логотип" />
      <h1
        className={`${lusitana.className} text-yellow-200 text-2xl border-l-2 border-gray-700 pl-4`}
      >
        Farada
      </h1>
    </div>
  );
};
export default Logo;
