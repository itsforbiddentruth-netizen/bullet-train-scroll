import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxScene from "@/components/ParallaxScene";
import BulletTrain from "@/components/BulletTrain";
import ScrollIndicator from "@/components/ScrollIndicator";
import SpeedMeter from "@/components/SpeedMeter";

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
        {/* Parallax background */}
        <ParallaxScene scrollProgress={scrollYProgress} />

        {/* Bullet train */}
        <BulletTrain scrollProgress={scrollYProgress} />

        {/* Speed meter */}
        <SpeedMeter scrollProgress={scrollYProgress} />

        {/* Scroll indicator */}
        <ScrollIndicator scrollProgress={scrollYProgress} />

        {/* Journey progress bar */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-muted z-40">
          <motion.div
            className="h-full bg-primary"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>

        {/* Title overlay */}
        <motion.div
          className="absolute top-8 left-8 z-40"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg">
            Shinkansen
          </h1>
          <p className="text-lg text-foreground/80 mt-2 drop-shadow">
            Japan's Bullet Train Experience
          </p>
        </motion.div>

        {/* Station markers */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
          <StationMarker 
            name="Tokyo" 
            progress={scrollYProgress} 
            activeRange={[0, 0.2]} 
          />
          <StationMarker 
            name="Nagoya" 
            progress={scrollYProgress} 
            activeRange={[0.2, 0.5]} 
          />
          <StationMarker 
            name="Kyoto" 
            progress={scrollYProgress} 
            activeRange={[0.5, 0.8]} 
          />
          <StationMarker 
            name="Osaka" 
            progress={scrollYProgress} 
            activeRange={[0.8, 1]} 
          />
        </div>
      </div>
    </div>
  );
};

interface StationMarkerProps {
  name: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  activeRange: [number, number];
}

const StationMarker = ({ name, progress, activeRange }: StationMarkerProps) => {
  const isActive = useTransform(progress, (v) => v >= activeRange[0] && v < activeRange[1]);
  const opacity = useTransform(isActive, (active) => (active ? 1 : 0.4));
  const scale = useTransform(isActive, (active) => (active ? 1 : 0.9));

  return (
    <motion.div
      className="flex items-center gap-3 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
      style={{ opacity, scale }}
    >
      <div className="w-2 h-2 rounded-full bg-primary" />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

export default Index;
