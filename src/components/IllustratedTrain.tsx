import { motion, useTransform, MotionValue } from "framer-motion";

interface IllustratedTrainProps {
  scrollProgress: MotionValue<number>;
}

const IllustratedTrain = ({ scrollProgress }: IllustratedTrainProps) => {
  const trainX = useTransform(scrollProgress, [0, 1], ["-100%", "120%"]);

  return (
    <motion.div
      className="absolute bottom-[38%] left-0 z-30"
      style={{ x: trainX }}
    >
      <svg width="450" height="70" viewBox="0 0 450 70">
        <defs>
          <linearGradient id="trainBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(270, 55%, 35%)" />
            <stop offset="100%" stopColor="hsl(270, 60%, 28%)" />
          </linearGradient>
        </defs>
        
        {/* Main train body - first car (engine) */}
        <g>
          {/* Body */}
          <rect x="0" y="15" width="140" height="40" rx="8" fill="url(#trainBodyGrad)" />
          
          {/* Nose */}
          <path
            d="M0 55 L0 35 Q-15 35 -20 45 Q-15 55 0 55"
            fill="url(#trainBodyGrad)"
          />
          
          {/* White stripe */}
          <rect x="-15" y="30" width="155" height="4" fill="white" />
          <rect x="-15" y="38" width="155" height="4" fill="white" />
          
          {/* Windows */}
          <rect x="15" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="45" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="75" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="105" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          
          {/* Window reflections */}
          <rect x="17" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="47" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="77" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="107" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
        </g>
        
        {/* Second car */}
        <g transform="translate(145, 0)">
          <rect x="0" y="15" width="140" height="40" rx="4" fill="url(#trainBodyGrad)" />
          
          {/* White stripe */}
          <rect x="0" y="30" width="140" height="4" fill="white" />
          <rect x="0" y="38" width="140" height="4" fill="white" />
          
          {/* Windows */}
          <rect x="10" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="40" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="70" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="100" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          
          {/* Window reflections */}
          <rect x="12" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="42" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="72" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="102" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
        </g>
        
        {/* Third car */}
        <g transform="translate(290, 0)">
          <rect x="0" y="15" width="140" height="40" rx="4" fill="url(#trainBodyGrad)" />
          
          {/* White stripe */}
          <rect x="0" y="30" width="140" height="4" fill="white" />
          <rect x="0" y="38" width="140" height="4" fill="white" />
          
          {/* Windows */}
          <rect x="10" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="40" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="70" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          <rect x="100" y="20" width="20" height="12" rx="2" fill="hsl(270, 70%, 22%)" />
          
          {/* Window reflections */}
          <rect x="12" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="42" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="72" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          <rect x="102" y="22" width="6" height="8" rx="1" fill="hsl(270, 50%, 35%)" opacity="0.5" />
          
          {/* Tail */}
          <path
            d="M140 15 Q155 15 160 25 L160 45 Q155 55 140 55"
            fill="url(#trainBodyGrad)"
          />
          <rect x="140" y="30" width="20" height="4" fill="white" />
          <rect x="140" y="38" width="20" height="4" fill="white" />
        </g>
        
        {/* Connector between cars */}
        <rect x="138" y="25" width="9" height="20" fill="hsl(270, 60%, 25%)" />
        <rect x="283" y="25" width="9" height="20" fill="hsl(270, 60%, 25%)" />
        
        {/* Undercarriage */}
        <rect x="-10" y="55" width="450" height="6" fill="hsl(270, 65%, 18%)" />
      </svg>
    </motion.div>
  );
};

export default IllustratedTrain;
