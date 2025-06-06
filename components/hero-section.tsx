import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div 
      className="flex flex-col gap-4 text-center items-center justify-center h-[700px] relative"
    >
      <div className="flex flex-col gap-4 relative z-10 items-center bg-secondary/80 p-24 rounded-4xl">
        <Image src="/polkadot.svg" alt="Polkadot logo" width={300} height={300} />
        <h1 className="text-6xl font-medium">Builders Resources</h1>
        <p className="text-lg">
          Aggregated by OpenGuild ♥️
        </p>
        <p className="text-lg font-semibold mt-12">
          Start building on Polkadot Hub - powerful smart contract layers for
          consumer dApps.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          <Button className="bg-primary hover:bg-[#FF2670] hover:text-white transition-all duration-200 ease-in-out px-12 py-6 text-xl" asChild>
            <Link href="/explore-ideas?category=all">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer px-12 py-6 text-xl" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
