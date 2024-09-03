"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { BodyNormal } from "@/app/_components/global/Text";
import { ItemsProps } from "@/types/utils";

export function MainNav() {
  const data: ItemsProps[] = [
    {
      title: "Beranda",
      href: "#beranda",
      onClick: () => toggleNav(false),
    },
    {
      title: "Manfaat",
      href: "#manfaat",
      onClick: () => toggleNav(false),
    },
    {
      title: "Tentang",
      href: "#tentang",
      onClick: () => toggleNav(false),
    },
    {
      title: "Galeri",
      href: "#galeri",
      onClick: () => toggleNav(false),
    },
    {
      title: "Komentar",
      href: "#komentar",
      onClick: () => toggleNav(false),
    },
    {
      title: "Recruitment",
      href: "/recruitment",
      onClick: () => toggleNav(false),
    },
  ];
  const { data: session, status } = useSession();
  const isAdmin = status == "authenticated" && session?.user?.email?.includes("Admin");
  const [showNav, toggleNav] = useState<boolean>(false);

  return (
    <>
      <div id="beranda" className={`block md:hidden h-full w-full fixed transition-all duration-300 bg-white z-[999] ${showNav ? "left-0" : "-left-full"}`}>
        <ul className="text-center flex flex-col gap-10 mt-28">
          {data.map((x, i) => (
            <li key={i}>
              <Link
                href={x.href}
                className={
                  "lg:text-base relative py-0 z-[100] lg:after:content-[''] lg:after:w-full lg:after:absolute lg:after:h-[2px] lg:after:bg-primary-500 lg:after:bg-opacity-0 lg:after:-bottom-3 lg:after:transition-[0.3s] lg:after:left-0 hover:after:bg-opacity-100 hover:text-primary-500 "
                }
                onClick={x.onClick}
              >
                <BodyNormal variant="REGULAR">{x.title}</BodyNormal>
              </Link>
            </li>
          ))}
          {isAdmin ? (
            <li>
              <Link
                href={"/admin"}
                className="text-base relative py-0 z-[100] lg:after:content-[''] lg:after:w-full lg:after:absolute lg:after:h-[2px] lg:after:bg-primary-500 lg:after:bg-opacity-0 lg:after:-bottom-3 lg:after:transition-[0.3s] lg:after:left-0 hover:after:bg-opacity-100 hover:text-primary-500"
                onClick={() => toggleNav(false)}
              >
                <BodyNormal variant="REGULAR">Admin</BodyNormal>
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <nav className="py-4 px-4 md:px-[140px] flex justify-between w-full fixed bg-white z-[999] items-center">
        <Link href="/">
          <Image src="/icons/Logo_text.svg" alt="Logo OSIS" width={150} height={37} priority />
        </Link>
        <ul className="hidden md:flex self-center w-auto gap-[42px]">
          {data.map((x, i) => (
            <li key={i}>
              <Link
                href={x.href}
                className={
                  "text-base relative py-0 z-[100] lg:after:content-[''] lg:after:w-full lg:after:absolute lg:after:h-[2px] lg:after:bg-primary-500 lg:after:bg-opacity-0 lg:after:-bottom-3 lg:after:transition-[0.3s] lg:after:left-0 hover:after:bg-opacity-100 hover:text-primary-500"
                }
                onClick={x.onClick}
              >
                <BodyNormal variant="REGULAR">{x.title}</BodyNormal>
              </Link>
            </li>
          ))}
          {isAdmin ? (
            <li>
              <Link
                href={"/admin"}
                className="text-base relative py-0 z-[100] lg:after:content-[''] lg:after:w-full lg:after:absolute lg:after:h-[2px] lg:after:bg-primary-500 lg:after:bg-opacity-0 lg:after:-bottom-3 lg:after:transition-[0.3s] lg:after:left-0 hover:after:bg-opacity-100 hover:text-primary-500"
                onClick={() => toggleNav(false)}
              >
                Admin
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
        <div onClick={() => toggleNav(!showNav)} className="hamburger-container">
          <button id="hamburger" type="button" className={`hamburger ${showNav ? "hamburger-active" : ""}`}>
            <span className="hamburger-line origin-top-left"></span>
            <span className="hamburger-line origin-center"></span>
            <span className="hamburger-line origin-bottom-left"></span>
          </button>
        </div>
      </nav>
    </>
  );
}
