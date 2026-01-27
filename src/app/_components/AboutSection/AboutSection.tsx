"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ToolsArea from "@/app/_components/AboutSection/ToolsArea";

export default function AboutSection() {
  const orbitRadius = 200;
  const icons = [
    { name: "JavaScript", src: "/icons/javascript.svg" },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "Node.js", src: "/icons/nodejs.svg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-20 h-screen snap-start">
      <div className="flex items-center gap-8 mb-8">
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-accent z-10"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          <motion.h2
            className="text-6xl font-bold whitespace-nowrap"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "tween",
              ease: "easeOut",
            }}
          >
            About<span className="text-accent">.</span>
          </motion.h2>
        </div>
        <div className="flex-1 h-[2px] bg-neutral-content"></div>
      </div>
      <div
        className={"w-full h-full flex flex-col md:flex-row gap-10 md:gap-20"}
      >
        <div
          className={"relative w-1/2 h-full flex justify-center items-center"}
        >
          <div
            className={
              "absolute w-100 h-100 border-dashed border-neutral-content border-3 rounded-full"
            }
          />
          <div
            className={
              "absolute w-103 h-103 border-dashed border-neutral-content/50 border-2 rounded-full"
            }
          />

          <motion.div
            className="absolute"
            style={{
              width: `${orbitRadius * 2}px`,
              height: `${orbitRadius * 2}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icons.map((icon, index) => {
              const angle = (360 / icons.length) * index;
              const radians = (angle * Math.PI) / 180;
              const x = orbitRadius * Math.cos(radians);
              const y = orbitRadius * Math.sin(radians);

              return (
                <motion.div
                  key={icon.name}
                  className="absolute top-15 w-16 h-16 border-2 border-neutral-content rounded-full bg-base-100 flex justify-center items-center shadow-lg"
                  style={{
                    top: `${orbitRadius + y - 30}px`,
                    left: `${orbitRadius + x - 30}px`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={40}
                    height={40}
                    className={"text-neutral-content"}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <Image
            src={"/image/avatar.gif"}
            alt={"avatar"}
            width={250}
            height={250}
            className={"mask mask-circle"}
          />
        </div>
        <div className={"flex flex-1 flex-col justify-center"}>
          <h3 className="text-4xl font-bold mb-5">
            A bit about <span className={"text-accent"}>me</span>.
          </h3>
          <p className="text-lg mb-4">
            I&#39;m Nebby, a third-year student at University of Information
            Technology, VNU-HCM, specializing in Software Engineering. I
            specialize in the{" "}
            <strong className={"text-accent"}>frontend</strong>, primarily using
            React and Next.js, but love to use whatever tools are right for the
            job.
          </p>
          <p className="text-lg mb-4">
            I&#39;m currently learning about backend along with DevOps to become
            a more flexible developer. I also enjoy surfing the web for new
            technologies and best practices to improve my skills.
          </p>
          <p className="text-lg mb-6">
            Outside of coding, I love exploring{" "}
            <strong className={"text-accent"}>
              Japanese culture & language
            </strong>
            , listening to music, playing mahjong and rhythm games.
          </p>
          <ToolsArea />
        </div>
      </div>
    </div>
  );
}
