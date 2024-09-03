import React from "react";
import Jumbotron from "./_components/Jumbotron";
import Manfaat from "./_components/Manfaat";
import Profil from "./_components/Profil";
import Visi from "./_components/Visi";
import Misi from "./_components/Misi";
import Galeri from "./_components/Galeri";
import Komentar from "./_components/Komentar";
import Footer from "./_components/Footer";
import { MainNav } from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <MainNav />
      <main className="px-4 md:px-[140px] mx-auto">
        <Jumbotron />
        <Manfaat />
        <Profil />
        <Visi />
        <Misi />
        <Galeri />
        <Komentar />
        <Footer />
      </main>
    </>
  );
}
