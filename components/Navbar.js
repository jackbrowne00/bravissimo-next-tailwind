import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../media/bravissimo-desktop.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="flex w-screen h-44 bg-white text-grey justify-center items-center">
        <Link href="/">
          <Image alt="logo" src={logo} />
        </Link>
      </div>
      <div className="flex w-screen h-10 bg-[#f4436d] text-white justify-center space-x-8 items-center">
        <Link href="/NewIn">
          <a>NEW IN</a>
        </Link>
        <Link href="/Lingerie">
          <a>LINGERIE</a>
        </Link>
        <Link href="Swimwear/">
          <a>SWIMWEAR</a>
        </Link>
        <Link href="/Nightwear">
          <a>NIGHTWEAR</a>
        </Link>
        <Link href="/Sportwear">
          <a>SPORTWEAR</a>
        </Link>
        <Link href="/Fitting">
          <a>FITTING</a>
        </Link>
        <a>SHOP BY SIZE</a>
        <a>SHOP BY TYPE</a>
        <a>SHOP BY BRAND</a>
        <Link href="/Sale">
          <a>SALE</a>
        </Link>
      </div>
    </nav>
  );
}
