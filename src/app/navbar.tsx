"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo/logoSmall.png";
import logoFull from '@/assets/logo/logoFull.png'
import PrimaryButtonLink from "@/components/ui/primaryButtonLink";
import { CiHamburger } from "@/components/ui/hamburger";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExitIcon } from "@/components/ui/exit";

const Navbar = () => {
  const pathname = usePathname();
  const [sideBar, setSideBar] = useState(false);
  console.log(sideBar);

  const links = [
    { to: "#main", title: "Главная" },
    { to: "#about-us", title: "О нас" },
    { to: "#services", title: "Услуги" },
    { to: "#contact-us", title: "Связь" },
  ];

  return (
    <header className="text-white font-semibold lg:text-[24px] max-w-[1200px] container mx-auto px-5 flex justify-between items-center py-4">
      <Image
        src={logo}
        width={100}
        height={100}
        priority={true}
        alt="Logo"
        className="w-[50px] h-[50px] lg:w-[107px] lg:h-[107px]"
      />
      <CiHamburger
        className="fill-primaryGreen w-[40px] md:hidden"
        onClick={() => setSideBar(true)}
      />
      {/* <img src="/public/logo/Icon.png" alt="img" /> */}
      <nav
        className={cn(
          "md:flex md:gap-10 md:items-center",
          `${
            sideBar
              ? "fixed w-full h-screen top-0 left-0 flex flex-col gap-6 p-6 backdrop-blur-lg bg-black/70 items-center z-50"
              : "hidden"
          }`
        )}
      >
        <div className="w-full flex justify-between items-center md:hidden">
          <Image
            src={logoFull}
            width={100}
            height={100}
            priority={true}
            alt="Logo"
            className="w-[120px]"
          />
          <ExitIcon
            className="fill-primaryGreen w-[35px]"
            onClick={() => setSideBar(false)}
          />
        </div>
        {links.map((link) => {
          return (
            <Link href={link.to} key={link.to}>
              {link.title}
            </Link>
          );
        })}
        <div className="md:hidden mt-2">
          <PrimaryButtonLink title="+998 91 327-22-17" to="tel:+998913272217" />
        </div>
      </nav>
      <PrimaryButtonLink
        className="hidden md:block lg:text-[28px]"
        title="+998 91 327-22-17"
        to="tel:+998913272217"
      />
    </header>
  );
};

export default Navbar;
