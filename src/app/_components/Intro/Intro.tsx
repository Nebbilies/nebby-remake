import { SplitText } from "@cyriacbr/react-split-text";
import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

function DiagonalGrid({
  size = 40,
  stroke = 1,
  color = "#EF4444",
  opacity = 0.3,
  angle = 45,
  className = "",
}) {
  const pathData = `M0 0 L${size} ${size} M${size} 0 L0 ${size}`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="diagonal-grid-pattern"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${angle})`}
          >
            <path
              d={pathData}
              fill="none"
              stroke={color}
              strokeWidth={stroke}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-grid-pattern)" />
      </svg>
    </div>
  );
}

export default function Intro({ isFinished }: { isFinished: boolean }) {
  const [scope, animate] = useAnimate();
  const [isLoading, setIsLoading] = useState(true);

  const welcomeText = ["お", "か", "え", "り", "な", "さ", "い"];

  useEffect(() => {
    const introAnimation = async () => {
      await animate(
        ".loading-bar",
        { scaleX: [0, 1], originX: 0 },
        { duration: 4, ease: "easeInOut" },
      );

      animate(
        ".loading-text",
        { opacity: [1, 0], y: -50 },
        { duration: 1, ease: "easeInOut" },
      );
      await animate(
        ".loading-bar-outline",
        { opacity: [1, 0], y: 50 },
        { duration: 1, ease: "easeInOut" },
      );

      setIsLoading(false);

      const distance = 150;
      const staggerDelay = 0.2;
      const staggerInitialDelay = 0.1;

      animate(
        ".ghost-animate-from-bottom",
        { opacity: [0, 1], y: [-distance, 0] },
        { duration: 1, ease: "easeInOut", delay: stagger(staggerDelay) },
      );
      animate(
        ".ghost-animate-from-top",
        { opacity: [0, 1], y: [distance, 0] },
        {
          duration: 1,
          ease: "easeInOut",
          delay: stagger(staggerDelay, { startDelay: staggerInitialDelay }),
        },
      );
      animate(
        ".animate-from-top",
        { opacity: [0, 1], y: [distance, 0] },
        {
          duration: 1,
          ease: "easeInOut",
          delay: stagger(staggerDelay, { startDelay: staggerInitialDelay }),
        },
      );
      await animate(
        ".animate-from-bottom",
        { opacity: [0, 1], y: [-distance, 0] },
        {
          duration: 1,
          ease: "easeInOut",
          delay: stagger(staggerDelay, { startDelay: staggerInitialDelay * 2 }),
        },
      );
    };
    introAnimation();
  }, [scope, animate]);

  return (
    <div
      ref={scope}
      className="flex justify-center items-center bg-slate-900 w-full h-full z-100 absolute"
    >
      <DiagonalGrid
        stroke={1}
        size={60}
        angle={60}
        color="rgba(255, 255, 255, 0.1)"
      />
      {isLoading && (
        <div className="loading-wrapper flex flex-col items-center gap-12">
          <h1 className="loading-text text-3xl tracking-wider font-bold text-neutral-content">
            Loading...
          </h1>
          <div className="loading-bar-outline h-3 outline-2 rounded-full w-64">
            <div className="loading-bar h-3 bg-secondary rounded-full w-64"></div>
          </div>
        </div>
      )}

      <div
        className={`welcome-wrapper mx-auto max-w-7xl flex-col flex lg:flex-row justify-between items-center w-full ${isLoading ? "hidden" : ""}`}
      >
        {welcomeText.map((letter, index) => {
          return (
            <div
              key={index}
              id={`welcome-letter-${index}`}
              className={`relative text-9xl font-black`}
            >
              <span
                className={`${index % 2 === 1 ? "animate-from-bottom" : "animate-from-top"}`}
              >
                {letter}
              </span>
              <span
                className={`${index % 2 === 1 ? "ghost-animate-from-top" : "ghost-animate-from-bottom"} absolute text-transparent font-outline-0.5 left-0 top-0 -z-1`}
              >
                {letter}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
