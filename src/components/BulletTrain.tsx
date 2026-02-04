import { motion, useTransform, MotionValue } from "framer-motion";

interface BulletTrainProps {
  scrollProgress: MotionValue<number>;
}

const BulletTrain = ({ scrollProgress }: BulletTrainProps) => {
  const trainX = useTransform(scrollProgress, [0, 1], ["-100%", "150%"]);
  const wheelRotation = useTransform(scrollProgress, [0, 1], [0, 3600]);

  return (
    <motion.div
      className="absolute bottom-[18%] z-30"
      style={{ x: trainX, left: 0 }}
    >
      <div className="relative">
        {/* Speed lines behind train */}
        <motion.div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-32 h-16 opacity-60"
          style={{
            background: `linear-gradient(to left, 
              hsl(var(--primary) / 0.4) 0%, 
              transparent 100%)`,
          }}
        />

        {/* Train SVG */}
        <svg
          width="400"
          height="120"
          viewBox="0 0 400 120"
          className="drop-shadow-2xl"
        >
          {/* Train body - main shell */}
          <defs>
            <linearGradient id="trainBody" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(210, 20%, 98%)" />
              <stop offset="50%" stopColor="hsl(210, 15%, 92%)" />
              <stop offset="100%" stopColor="hsl(210, 10%, 85%)" />
            </linearGradient>
            <linearGradient id="trainNose" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(210, 20%, 96%)" />
              <stop offset="100%" stopColor="hsl(210, 15%, 90%)" />
            </linearGradient>
            <linearGradient id="blueStripe" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(210, 85%, 55%)" />
              <stop offset="100%" stopColor="hsl(210, 80%, 45%)" />
            </linearGradient>
            <filter id="trainShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Main body */}
          <path
            d="M50 30 
               Q30 30 25 50 
               L20 70 
               Q15 85 30 90 
               L350 90 
               Q370 90 375 75 
               L375 45 
               Q375 30 360 30 
               Z"
            fill="url(#trainBody)"
            filter="url(#trainShadow)"
          />

          {/* Nose cone */}
          <path
            d="M50 30 
               Q30 30 25 50 
               L20 70 
               Q15 85 30 90 
               L60 90 
               L60 30 
               Z"
            fill="url(#trainNose)"
          />

          {/* Blue stripe */}
          <rect
            x="60"
            y="55"
            width="310"
            height="12"
            fill="url(#blueStripe)"
            rx="2"
          />

          {/* Front blue accent */}
          <path
            d="M25 50 Q30 50 35 55 L35 67 Q30 70 25 70 Z"
            fill="hsl(210, 85%, 50%)"
          />

          {/* Windows */}
          <rect x="75" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="110" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="145" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="180" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="215" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="250" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="285" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />
          <rect x="320" y="35" width="25" height="18" rx="3" fill="hsl(200, 30%, 25%)" />

          {/* Window reflections */}
          <rect x="77" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="112" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="147" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="182" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="217" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="252" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="287" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />
          <rect x="322" y="37" width="8" height="14" rx="1" fill="hsl(200, 40%, 45%)" opacity="0.5" />

          {/* Front light */}
          <ellipse cx="28" cy="60" rx="4" ry="6" fill="hsl(45, 100%, 70%)" />

          {/* Wheels */}
          <g>
            <motion.circle
              cx="100"
              cy="95"
              r="8"
              fill="hsl(0, 0%, 25%)"
              style={{ rotate: wheelRotation }}
            />
            <motion.circle
              cx="150"
              cy="95"
              r="8"
              fill="hsl(0, 0%, 25%)"
              style={{ rotate: wheelRotation }}
            />
            <motion.circle
              cx="250"
              cy="95"
              r="8"
              fill="hsl(0, 0%, 25%)"
              style={{ rotate: wheelRotation }}
            />
            <motion.circle
              cx="300"
              cy="95"
              r="8"
              fill="hsl(0, 0%, 25%)"
              style={{ rotate: wheelRotation }}
            />
          </g>

          {/* Wheel details */}
          <circle cx="100" cy="95" r="3" fill="hsl(0, 0%, 40%)" />
          <circle cx="150" cy="95" r="3" fill="hsl(0, 0%, 40%)" />
          <circle cx="250" cy="95" r="3" fill="hsl(0, 0%, 40%)" />
          <circle cx="300" cy="95" r="3" fill="hsl(0, 0%, 40%)" />

          {/* Undercarriage */}
          <rect x="80" y="90" width="240" height="8" rx="2" fill="hsl(0, 0%, 30%)" />

          {/* Top ridge */}
          <path
            d="M60 30 Q200 25 360 30"
            fill="none"
            stroke="hsl(210, 15%, 88%)"
            strokeWidth="3"
          />

          {/* Red accent line on nose */}
          <path
            d="M22 58 L22 72"
            stroke="hsl(0, 75%, 50%)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Motion blur overlay when moving fast */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to right, 
              transparent 0%, 
              hsl(var(--train-body) / 0.3) 50%, 
              transparent 100%)`,
            opacity: useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0, 0.5, 0.5, 0]),
          }}
        />
      </div>
    </motion.div>
  );
};

export default BulletTrain;
