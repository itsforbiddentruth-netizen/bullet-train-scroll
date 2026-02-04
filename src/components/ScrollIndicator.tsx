import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  scrollProgress: MotionValue<number>;
}

const ScrollIndicator = ({ scrollProgress }: ScrollIndicatorProps) => {
  const opacity = useTransform(scrollProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-sm font-medium text-foreground/80 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        Scroll to move the train
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/60" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
