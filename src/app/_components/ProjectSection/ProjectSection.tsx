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
      imageUrl: "/image/projects/honya-bookstore.png",
      projectUrl: "https://honya-bookstore.vercel.app",
    },
    {
      name: "VNOC Tournament Management",
      description:
        "A tournament management system for Vietnam osu! Championship. Features include team registration, match scheduling, score tracking, mappool management.",
      tools: ["ReactJS", "MySQL", "Express", "Node.js"],
      imageUrl: "/image/projects/vnoc.png",
      projectUrl: "https://vnocmanagement.vercel.app",
    },
    {
      name: "Electricilies",
      description:
        "An e-commerce platform specializing in electronic products. Currently supports purchase workflow, product/category creation.",
      note: "Backend is dead atm, Design not by me.",
      tools: ["Next.js", "ShadcnUI"],
      imageUrl: "/image/projects/electricilies.png",
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
    <div className="max-w-7xl mx-auto px-5 py-15 h-screen snap-start flex flex-col justify-center">
      <div className="flex items-center gap-8 mb-8 shrink-0">
        <div className="flex-1 h-1 bg-neutral-content/20"></div>
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-accent z-10"
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ transformOrigin: "right" }}
          />
          <motion.h2
            className="text-4xl md:text-6xl font-bold whitespace-nowrap"
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

      <div className="flex-1 w-full h-full min-h-0 carousel carousel-center space-x-4 p-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item w-full flex items-center justify-center"
            >
              <div
                className="relative w-full max-w-5xl h-full aspect-video bg-neutral
                rounded-3xl shadow-2xl group backdrop-blur-[2px] border border-white/10"
                style={{
                  ...(project.imageUrl
                    ? {
                        backgroundImage: `url(${project.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : { backgroundColor: "#1a1a1a" }),
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 rounded-3xl transition-colors duration-500" />
                <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-8 md:p-12 gap-4">
                  <h3 className="text-3xl md:text-5xl font-bold text-accent drop-shadow-md">
                    {project.name}
                  </h3>
                  <p className="text-md md:text-l font-medium text-white/80 max-w-2xl leading-relaxed drop-shadow-sm">
                    {project.description}
                  </p>
                  {project.note && (
                    <p className="text-sm md:text-base font-medium text-red-400 italic bg-black/40 px-4 py-1 rounded-full border border-red-400/30">
                      Note: {project.note}
                    </p>
                  )}
                  {project.tools && (
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="badge badge-outline badge-lg text-neutral-content"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    className="mt-6 btn btn-primary gap-2"
                  >
                    View Project
                  </a>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                      href={"#slide" + ((index - 1) % projects.length)}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={"#slide" + ((index + 1) % projects.length)}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
