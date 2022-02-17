import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import homePic1 from "../media/homePic1.webp";
import homePic2 from "../media/homePic2.webp";
import homePic3 from "../media/homePic3.webp";

export default function Home() {
  return (
    <div>
      <div className="flex w-screen text-grey justify-center items-center space-x-2 h-10">
        <a className="underline underline-offset-2">
          FREE UK DELIVERY OVER £75
        </a>
        <div>·</div>
        <a className="underline underline-offset-2">FREE UK 60 DAY RETURNS</a>
        <div>·</div>
        <a className="underline underline-offset-2">HOW TO GET A BRA FITTING</a>
      </div>
      <div>
        <h2 className="flex w-screen justify-center space-x-8 items-center py-8 text-2xl">
          JUMP STRAIGHT IN!
        </h2>
        <div className="flex w-screen justify-center space-x-3 items-center">
          <button className="py-1 px-2 rounded text-white bg-[#f4436d]">
            SHOP ALL BRAS
          </button>
          <button className="py-1 px-2 rounded text-white bg-[#f4436d]">
            SHOP ALL SWIMWEAR
          </button>
          <button className="py-1 px-2 rounded text-white bg-[#f4436d]">
            SHOP ALL SPORTS BRAS
          </button>
          <button className="py-1 px-2 rounded text-white bg-[#f4436d]">
            THE COMFY BRA EDIT
          </button>
          <button className="py-1 px-2 rounded text-white bg-[#f4436d]">
            SHOP NON-WIRED BRAS
          </button>
        </div>
      </div>
      <div className="w-screen gap-6 grid grid-cols-2 max-w-screen-lg">
        <div className="col col-span-2">
          <Image src={homePic1} alt="Home Image" />
        </div>
        <div className="col col-span-1">
          <Image src={homePic2} alt="Home Image" />
        </div>
        <div className="col col-span-1">
          <Image src={homePic3} alt="Home Image" />
        </div>
      </div>
    </div>
  );
}
