"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavItems } from "@/lib/Datas";
import ConsultationBtn from "./ConsultationBtn";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <SheetTrigger asChild onClick={() => setIsOpen((prev) => !prev)}>
        <Button size={"icon"} variant={"outline"} className="">
          <CiMenuFries size={25} />
          <span className="sr-only">open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="lg:hidden">
        <SheetHeader>
          <SheetTitle>
            <h1 className="font-sans md:font-bold font-medium bg-gradient-to-r from-green-500 via-green-300 to-green-950 bg-clip-text text-transparent md:text-xl text-base  italic">
              <Link
                href={"/"}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-colors duration-500 ease-in-out"
              >
                Greenscapes Artificial Turf
              </Link>
            </h1>
          </SheetTitle>
          <SheetDescription className="sr-only">
            This is the menu
          </SheetDescription>
        </SheetHeader>
        <div
          className="flex flex-col gap-3 px-2 "
          onClick={() => setIsOpen(false)}
        >
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-black transition-colors   text-xl duration-500 ease-in-out after:content-[''] after:block after:w-full after:h-[2px] after:bg-green-300 after:transition-all after:duration-500 after:ease-in-out max-w-[70px]"
            >
              {item.name}
            </Link>
          ))}
          <ConsultationBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
