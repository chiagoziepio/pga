"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pb-10">
      <MaxWidthWrapper>
        <div className="flex justify-between flex-col lg:flex-row items-center gap-y-7">
          <h1 className="font-sans font-medium bg-gradient-to-r from-green-500 via-green-300 to-green-950 bg-clip-text text-transparent text-xl italic">
            <a
              href="#"
              onClick={scrollToTop}
              className="hover:text-green-500 transition-colors duration-500 ease-in-out"
            >
              Greenscapes Artificial Turf
            </a>
          </h1>
          <div className="flex flex-col gap-2.5 items-center text-muted-foreground">
            <Link href={"#"}>
              <p className="hover:text-primary"> Home</p>
            </Link>
            <Link href={"#"}>
              <p className="hover:text-primary"> About</p>
            </Link>
            <a href="#faq">
              <p className="hover:text-primary"> FAQ</p>
            </a>
          </div>
          <div className="flex flex-col gap-2.5  text-muted-foreground">
            <a href="tel:+2348167344653">
              <p className="hover:text-primary flex gap-1 items-center">
                <FaPhone /> +2348167344653
              </p>
            </a>
            <a href="mailto:info@greenscapesartificialturf.com">
              <p className="hover:text-primary flex gap-1 items-center">
                <MdEmail /> info@greenscapesartificialturf.com
              </p>
            </a>
            <a href="greenscapesartificialturf.com" target="_blank">
              <p className="hover:text-primary flex gap-1 items-center">
                <CgWebsite /> Visit our website
              </p>
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
