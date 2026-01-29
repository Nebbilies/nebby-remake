import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface DotProps {
  scrollYProgress: MotionValue;
  index: number;
  totalSections: number;
  onClick: () => void;
}

const Dot = ({ scrollYProgress, index, totalSections, onClick }: DotProps) => {
  const step = 1 / (totalSections - 1);
  const target = index * step;
  const buffer = step / 2;
  const inputRange = [target - buffer, target, target + buffer];

  const scale = useTransform(scrollYProgress, inputRange, [1, 1.5, 1]);
  const opacity = useTransform(scrollYProgress, inputRange, [0.5, 1, 0.5]);
  const color = useTransform(scrollYProgress, inputRange, [
    "#ffffff",
    "#facc15",
    "#ffffff",
  ]);

  return (
    <motion.div
      className="w-3 h-3 rounded-full shadow-sm"
      style={{ scale, opacity, backgroundColor: color }}
      onClick={onClick}
    />
  );
};

interface ScrollDotsProps {
  scrollYProgress: MotionValue;
  totalSections: number;
  onDotClick: (index: number) => void;
}

export default function ScrollDots({
  scrollYProgress,
  totalSections,
  onDotClick,
}: ScrollDotsProps) {
  const dots = Array.from({ length: totalSections }, (_, index) => (
    <Dot
      key={index}
      scrollYProgress={scrollYProgress}
      index={index}
      totalSections={totalSections}
      onClick={() => onDotClick(index)}
    />
  ));

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 cursor-pointer">
      {dots}
    </div>
  );
}
