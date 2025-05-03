import { NavItems } from "@/lib/Datas";
import Link from "next/link";
import ConsultationBtn from "./ConsultationBtn";

const Header = () => {
  return (
    <header className=" backdrop-blur-md sticky top-[30px] z-50 h-20">
      <nav className="flex justify-between items-center w-8/12 mx-auto  h-18 bg-bg2/85 rounded-4xl px-2.5 ">
        <h1 className="font-sans font-bold bg-gradient-to-r from-green-5 00 via-green-300 to-green-950 bg-clip-text text-transparent text-2xl italic">
          <Link
            href={"/"}
            className="hover:text-green-500 transition-colors duration-500 ease-in-out"
          >
            Putting Green Austin
          </Link>
        </h1>
        <div className="flex gap-4 items-center">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-primary transition-colors  font-monsterrat text-xl duration-500 ease-in-out after:content-[''] after:block after:w-full after:h-[2px] after:bg-green-300 after:transition-all after:duration-500 after:ease-in-out "
            >
              {item.name}
            </Link>
          ))}
          <ConsultationBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
