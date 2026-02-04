import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IllustratedScene from "@/components/IllustratedScene";
import IllustratedTrain from "@/components/IllustratedTrain";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Fixed viewport scene */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Illustrated background */}
        <IllustratedScene scrollProgress={scrollYProgress} />

        {/* Train on bridge - Auto-moving + scroll responsive */}
        <IllustratedTrain scrollProgress={scrollYProgress} />

        {/* Title overlay */}
        <div className="absolute top-[12%] left-0 right-0 z-40 text-center">
          <motion.p
            className="text-lg md:text-xl tracking-[0.3em] text-foreground/90 mb-2 font-medium"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
            }}
          >
            CREATIVE ANIMATION JOURNEY
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
              y: useTransform(scrollYProgress, [0, 0.2], [0, -50]),
            }}
          >
            BEYOND LIMITS
          </motion.h1>
        </div>

        {/* Bottom text */}
        <motion.div
          className="absolute bottom-[8%] left-0 right-0 z-40 text-center"
          style={{
            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
          }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-24 h-0.5 bg-foreground/50" />
            <div className="w-24 h-0.5 bg-foreground/50" />
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-foreground italic">
            Bring your design to the next level
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-0.5 bg-secondary" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
          }}
        >
          <span className="text-sm font-medium text-foreground/80 bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full">
            Scroll to control the train direction
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-foreground/60" />
          </motion.div>
        </motion.div>

        {/* Journey progress bar */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-foreground/20 rounded-full z-40 overflow-hidden">
          <motion.div
            className="h-full bg-secondary rounded-full"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
