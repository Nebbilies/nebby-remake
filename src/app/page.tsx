"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import AboutSection from "@/app/_components/AboutSection/AboutSection";
import ProjectSection from "@/app/_components/ProjectSection/ProjectSection";
import ScrollDots from "./_components/ScrollDots/ScrollDots";
import Intro from "./_components/Intro/Intro";

export default function Home() {
  const [isIntroFinished, setIsIntroFinished] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className={
        "relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      }
    >
      <Intro isFinished={isIntroFinished} />
      <ScrollDots
        totalSections={3}
        scrollYProgress={scrollYProgress}
        onDotClick={scrollToSection}
      />
      <div
        className="fixed -z-10 opacity-10 inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: 'url("/image/background/our-identity.gif")' }}
      />
      <div
        className="fixed inset-0 opacity-40 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1.4px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="relative snap-start h-screen items-center justify-center w-full bg-cover bg-center lg:bg-cover -z-10"
        style={{ backgroundImage: 'url("/image/background/our-identity.gif")' }}
      >
        <div className="absolute w-full h-full bg-gradient-to-r from-black/90 from-25% via-black/75 via-50% to-transparent to-100% opacity-90 z-0"></div>
        <div className="text-primary-content w-full h-full flex z-10 relative">
          <div
            className={
              "w-full lg:w-1/2 flex flex-col justify-center items-center h-full"
            }
          >
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold lg:text-7xl">
                Hi, <span className={"text-accent"}>Nebby </span> です。
              </h1>
              <h3 className="text-2xl font-bold mb-10 lg:text-4xl">
                I <span className={"text-accent"}>build</span> things for the
                web.
              </h3>
              <button className="btn btn-primary btn-xl">Blog</button>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
