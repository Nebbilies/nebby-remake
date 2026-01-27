"use client";

import { motion } from "framer-motion";

export default function ProjectSection() {
  const projects = [
    {
      name: "Honya Bookstore",
      description:
        "An online bookstore platform which offers various genres of books. Currently supports purchase workflow, book/category creation.",
      note: "Backend is dead atm",
      tools: ["Next.js", "Figma"],
      imageUrl: "/images/projects/honya-bookstore.png",
      projectUrl: "https://honya-bookstore.vercel.app",
    },
    {
      name: "VNOC Tournament Management",
      description:
        "A tournament management system for Vietnam osu! Championship. Features include team registration, match scheduling, score tracking, mappool management.",
      tools: ["ReactJS", "MySQL", "Express", "Node.js"],
      imageUrl: "/images/projects/vnoc.png",
      projectUrl: "https://vnocmanagement.vercel.app",
    },
    {
      name: "Electricilies",
      description:
        "An e-commerce platform specializing in electronic products. Currently supports purchase workflow, product/category creation.",
      note: "Backend is dead atm, Design not by me.",
      tools: ["Next.js", "ShadcnUI"],
      imageUrl: "/images/projects/electricilies.png",
      projectUrl: "https://electricilies.vercel.app",
    },
    {
      name: "And many other side projects!",
      description:
        "Check out my GitHub for more small projects and experiments I have worked on in my free time. (Discord bots, tournament overlays, etc...)",
      tools: ["GitHub"],
      projectUrl: "https://github.com/Nebbilies",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-5 py-20 h-screen snap-start">
      <div className="flex items-center gap-8 mb-8">
        <div className="flex-1 h-1 bg-neutral-content"></div>
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-accent z-10"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "right" }}
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
            Projects<span className="text-accent">.</span>
          </motion.h2>
        </div>
      </div>
      <div className={"w-full h-full carousel"}></div>
    </div>
  );
}
