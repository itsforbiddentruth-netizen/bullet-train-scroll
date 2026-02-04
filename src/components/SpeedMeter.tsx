import { motion, MotionValue, useTransform, useSpring } from "framer-motion";

interface SpeedMeterProps {
  scrollProgress: MotionValue<number>;
}

const SpeedMeter = ({ scrollProgress }: SpeedMeterProps) => {
  const rawSpeed = useTransform(scrollProgress, [0, 0.5, 1], [0, 320, 0]);
  const speed = useSpring(rawSpeed, { stiffness: 100, damping: 20 });
  const rotation = useTransform(speed, [0, 320], [-45, 225]);

  return (
    <motion.div className="fixed top-8 right-8 z-50 bg-background/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Speed
        </span>
        
        {/* Speedometer dial */}
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 15 70 A 40 40 0 1 1 85 70"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Colored arc based on speed */}
            <motion.path
              d="M 15 70 A 40 40 0 1 1 85 70"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="188"
              style={{
                strokeDashoffset: useTransform(speed, [0, 320], [188, 0]),
              }}
            />
          </svg>
          
          {/* Needle */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-8 origin-bottom"
            style={{
              rotate: rotation,
              x: "-50%",
              y: "-100%",
              background: "linear-gradient(to top, hsl(var(--destructive)) 0%, hsl(var(--destructive)) 80%, transparent 100%)",
              borderRadius: "2px",
            }}
          />
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground" />
        </div>

        {/* Speed number */}
        <motion.div className="text-2xl font-bold text-foreground tabular-nums">
          <motion.span>
            {useTransform(speed, (v) => Math.round(v))}
          </motion.span>
          <span className="text-xs font-normal text-muted-foreground ml-1">km/h</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SpeedMeter;
