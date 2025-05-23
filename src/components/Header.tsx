import { NavItems } from "@/lib/Datas";
import Link from "next/link";
import ConsultationBtn from "./ConsultationBtn";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="  sticky top-[20px] z-50 h-20 font-playfair">
      <nav className="flex justify-between items-center md:w-8/12 w-11/12 mx-auto backdrop-blur-md  h-18 bg-bg2/75 rounded-4xl px-2.5 ">
        <h1 className="font-sans md:font-bold font-medium bg-gradient-to-r from-green-500 via-green-300 to-green-950 bg-clip-text text-transparent md:text-2xl text-[17px]  italic">
          <Link
            href={"/"}
            className="hover:text-green-500 transition-colors duration-500 ease-in-out"
          >
            Greenscapes Artificial Turf
          </Link>
        </h1>
        <div className="lg:flex gap-4 items-center hidden">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-primary transition-colors   text-xl duration-500 ease-in-out after:content-[''] after:block after:w-full after:h-[2px] after:bg-green-300 after:transition-all after:duration-500 after:ease-in-out "
            >
              {item.name}
            </Link>
          ))}
          <ConsultationBtn />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
