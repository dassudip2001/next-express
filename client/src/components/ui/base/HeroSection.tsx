import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <Image src="/banner.svg" width={600} height={600} alt="banner" />
      </div>
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text- bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text">
          Clash of Clans
        </h1>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-center pb-12 ">
          Discover the best strategies to win
        </p>
        <Link href="/login" className="mt-4">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
