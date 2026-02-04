import { motion, useTransform, MotionValue, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface IllustratedTrainProps {
  scrollProgress: MotionValue<number>;
}

const IllustratedTrain = ({ scrollProgress }: IllustratedTrainProps) => {
  // Auto-moving base position (loops continuously)
  const autoPosition = useMotionValue(0);
  const directionRef = useRef(1); // 1 = forward, -1 = backward
  
  // Animate the train automatically
  useAnimationFrame((time, delta) => {
    const currentScroll = scrollProgress.get();
    
    // Determine direction based on scroll
    if (currentScroll > 0.01) {
      directionRef.current = 1; // Forward when scrolling down
    }
    
    // Auto move in current direction
    const speed = 0.03; // Speed of auto-movement
    const newPos = autoPosition.get() + (speed * directionRef.current * delta / 16);
    
    // Loop the position (0 to 100 range, then reset)
    if (newPos > 100) {
      autoPosition.set(-20);
    } else if (newPos < -20) {
      autoPosition.set(100);
    } else {
      autoPosition.set(newPos);
    }
  });

  // Combine auto position with scroll influence
  const trainX = useTransform(
    [autoPosition, scrollProgress],
    ([auto, scroll]: number[]) => {
      // Scroll adds extra offset to the auto movement
      const scrollOffset = scroll * 50; // Scroll influence
      return `${auto + scrollOffset}%`;
    }
  );

  return (
    <motion.div
      className="absolute bottom-[38%] left-0 z-30"
      style={{ x: trainX }}
    >
      <svg width="450" height="70" viewBox="0 0 450 70">
        <defs>
          {/* Red gradient for train body */}
          <linearGradient id="trainBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 80%, 55%)" />
            <stop offset="100%" stopColor="hsl(0, 75%, 45%)" />
          </linearGradient>
          {/* Blue accent gradient */}
          <linearGradient id="trainAccent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 70%, 50%)" />
            <stop offset="100%" stopColor="hsl(220, 65%, 40%)" />
          </linearGradient>
        </defs>
        
        {/* Main train body - first car (engine) */}
        <g>
          {/* Body - Red */}
          <rect x="0" y="15" width="140" height="40" rx="8" fill="url(#trainBodyGrad)" />
          
          {/* Nose */}
          <path
            d="M0 55 L0 35 Q-15 35 -20 45 Q-15 55 0 55"
            fill="url(#trainBodyGrad)"
          />
          
          {/* White stripes */}
          <rect x="-15" y="30" width="155" height="5" fill="white" />
          <rect x="-15" y="40" width="155" height="3" fill="hsl(220, 70%, 50%)" />
          
          {/* Windows - Blue tint */}
          <rect x="15" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="45" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="75" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="105" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          
          {/* Window reflections */}
          <rect x="17" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="47" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="77" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="107" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          
          {/* Headlight */}
          <circle cx="-12" cy="45" r="4" fill="hsl(45, 100%, 70%)" />
        </g>
        
        {/* Second car */}
        <g transform="translate(145, 0)">
          <rect x="0" y="15" width="140" height="40" rx="4" fill="url(#trainBodyGrad)" />
          
          {/* White stripe */}
          <rect x="0" y="30" width="140" height="5" fill="white" />
          <rect x="0" y="40" width="140" height="3" fill="hsl(220, 70%, 50%)" />
          
          {/* Windows */}
          <rect x="10" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="40" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="70" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="100" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          
          {/* Window reflections */}
          <rect x="12" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="42" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="72" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="102" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
        </g>
        
        {/* Third car */}
        <g transform="translate(290, 0)">
          <rect x="0" y="15" width="140" height="40" rx="4" fill="url(#trainBodyGrad)" />
          
          {/* White stripe */}
          <rect x="0" y="30" width="140" height="5" fill="white" />
          <rect x="0" y="40" width="140" height="3" fill="hsl(220, 70%, 50%)" />
          
          {/* Windows */}
          <rect x="10" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="40" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="70" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          <rect x="100" y="20" width="20" height="12" rx="2" fill="hsl(220, 80%, 30%)" />
          
          {/* Window reflections */}
          <rect x="12" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="42" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="72" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          <rect x="102" y="22" width="6" height="8" rx="1" fill="hsl(210, 60%, 50%)" opacity="0.4" />
          
          {/* Tail */}
          <path
            d="M140 15 Q155 15 160 25 L160 45 Q155 55 140 55"
            fill="url(#trainBodyGrad)"
          />
          <rect x="140" y="30" width="20" height="5" fill="white" />
          <rect x="140" y="40" width="20" height="3" fill="hsl(220, 70%, 50%)" />
          
          {/* Tail light */}
          <circle cx="155" cy="45" r="3" fill="hsl(0, 80%, 60%)" />
        </g>
        
        {/* Connector between cars - Blue */}
        <rect x="138" y="25" width="9" height="20" fill="hsl(220, 60%, 40%)" />
        <rect x="283" y="25" width="9" height="20" fill="hsl(220, 60%, 40%)" />
        
        {/* Undercarriage - Dark blue */}
        <rect x="-10" y="55" width="450" height="6" fill="hsl(230, 65%, 18%)" />
        
        {/* Wheels */}
        <circle cx="30" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
        <circle cx="110" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
        <circle cx="175" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
        <circle cx="255" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
        <circle cx="320" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
        <circle cx="400" cy="58" r="6" fill="hsl(0, 0%, 30%)" />
      </svg>
    </motion.div>
  );
};

export default IllustratedTrain;
