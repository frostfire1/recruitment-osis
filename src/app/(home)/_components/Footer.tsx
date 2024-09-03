import { BodyNormal, BodySmall } from "@/app/_components/global/Text";
import { ItemsProps } from "@/types/utils";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
export default function Footer() {
  const menu: ItemsProps[] = [
    {
      title: "Beranda",
      href: "#beranda",
    },
    {
      title: "Manfaat",
      href: "#manfaat",
    },
    {
      title: "Tentang",
      href: "#tentang",
    },
    {
      title: "Galeri",
      href: "#galeri",
    },
    {
      title: "Komentar",
      href: "#komentar",
    },
    {
      title: "Recruitment",
      href: "/recruitment",
    },
  ];
  const links: ItemsProps[] = [
    {
      title: "SMK Telkom Malang",
      href: "https://www.smktelkom-mlg.sch.id/",
    },
    {
      title: "MPK Moklet",
      href: "#manfaat",
    },
    {
      title: "Metic Moklet",
      href: "#tentang",
    },
    {
      title: "Mokletdev",
      href: "#tentang",
    },
  ];
  const about: ItemsProps[] = [
    {
      title: "Tentang",
      href: "#",
    },
    {
      title: "Pengembang",
      href: "#",
    },
  ];
  const socials: ItemsProps[] = [
    {
      title: "Instagram",
      href: "https://instagram.com/osismoklet",
    },
    {
      title: "Youtube",
      href: "#",
    },
    {
      title: "Tiktok",
      href: "https://www.tiktok.com/@osismoklet",
    },
  ];
  return (
    <>
      <footer id="footer" className="w-full pt-[86px] pb-5">
        <div className="flex flex-col md:flex-row md:justify-between pb-8 border-b border-neutral-500 mb-8 gap-[42px]">
          <div className="flex flex-col gap-3 w-full md:max-w-sm md:pr-10">
            <Image src="/icons/Logo_text.svg" alt="Logo OSIS" width={150} height={37} priority />
            <BodySmall variant="REGULAR" className="text-neutral-500">
              Organisasi untuk menginspirasi, melayani, dan membentuk pemimpin masa depan.
            </BodySmall>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between gap-[46px] md:gap-16 w-full">
            <div>
              <h6 className="font-bold uppercase mb-6">Menu</h6>
              <ul className="text-sm text-neutral-500 flex flex-col gap-5">
                {menu.map((x, i) => (
                  <li key={i}>
                    <Link href={x.href} className="hover:text-black transition-all duration-300">
                      <BodySmall variant="REGULAR">{x.title}</BodySmall>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase mb-6">Useful Links</h6>
              <ul className="text-sm text-neutral-500 flex flex-col gap-5">
                {links.map((x, i) => (
                  <li key={i}>
                    <Link href={x.href} className="hover:text-black transition-all duration-300">
                      <BodySmall variant="REGULAR">{x.title}</BodySmall>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase mb-6">About</h6>
              <ul className="text-sm text-neutral-500 flex flex-col gap-5">
                {about.map((x, i) => (
                  <li key={i}>
                    <Link href={x.href} className="hover:text-black transition-all duration-300">
                      <BodySmall variant="REGULAR">{x.title}</BodySmall>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-bold uppercase mb-6">Social Media</h6>
              <ul className="text-sm text-neutral-500 flex flex-col gap-5">
                {socials.map((x, i) => (
                  <li key={i}>
                    <Link href={x.href} className="hover:text-black transition-all duration-300">
                      <BodySmall variant="REGULAR">{x.title}</BodySmall>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <BodySmall variant="REGULAR" className="text-neutral-800">
            In Collaboration with <b className="font-bold text-primary-500">Metic | MokletDev</b>
          </BodySmall>
          <BodySmall variant="REGULAR" className="text-neutral-800">
            © 2023 OSIS Moklet
          </BodySmall>
        </div>
      </footer>
    </>
  );
}
