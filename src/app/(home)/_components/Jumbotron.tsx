"use client";
import Link from "next/link";
import { ReactElement, useState } from "react";
import Image from "next/image";
import { BodyNormal, H1 } from "@/app/_components/global/Text";
import { LinkButton } from "@/app/_components/global/Button";
import TentangOsisMoklet from "@/app/_components/svg/TentangOsisMoklet";

export default function Jumbotron(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <section id="beranda" className="w-full py-3 md:py-[70px]">
        <div className="flex justify-between items-center py-16 gap-12 md:gap-20 flex-col md:flex-row">
          <div className="block order-2 md:order-1">
            <H1 className="mb-4">
              <span className="text-primary-500">Wadah</span> Bagi Para Inovator, Pemimpin Masa Depan, dan Penggagas Perubahan.
            </H1>
            <BodyNormal variant="REGULAR" className="text-neutral-500 mb-8">
              OSIS Moklet - Menginspirasi, Berkolaborasi, Meraih Prestasi
            </BodyNormal>
            <div className="flex gap-9 md:gap-[42px]">
              <LinkButton variant="PRIMARY" href={"https://wa.me/6282141341737"} target="__blank">
                Hubungi Kami
              </LinkButton>
              <Link href={"#tentang"} className="flex items-center group text-sm transition duration-300 hover:text-primary-500">
                <i className="w-12 h-12">
                  <TentangOsisMoklet />
                </i>
                <p>Tentang OSIS Moklet</p>
              </Link>
            </div>
          </div>
          <Image
            src="/img/FotoDaxiers.svg"
            width={411}
            height={430}
            priority
            className={`object-cover order-1 md:order-2 ${isLoading ? "scale-105 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}`}
            alt="Anak OSIS Moklet"
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </section>
    </>
  );
}
