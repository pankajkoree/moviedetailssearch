"use client";

import { NavBar } from "@/components/NavBar";
import { NavBarMobile } from "@/components/NavBarMobile";
import { Trending } from "@/components/Trending";
import { VideoComponent } from "@/components/VideoComponent";
import { VideoComponentMobile } from "@/components/VideoComponentMobile";

export default function Home() {
  return (
    <div className="relative flex justify-center w-full h-full">
      {/* Top Nav (for tab + laptop view) */}
      <div className="relative hidden md:flex md:flex-col justify-center md:items-center w-full md:w-[80%] lg:w-[60%] border">
        <NavBar />
        <VideoComponent />
        <Trending />
      </div>
      {/* End Top Nav (for tab + laptop view) */}

      {/* Bottom Nav (for mobile view only) */}
      <div className="fixed md:hidden">
        <NavBarMobile />

        <VideoComponentMobile />
      </div>
      {/* End Bottom Nav (for mobile view only) */}
    </div>
  );
}
