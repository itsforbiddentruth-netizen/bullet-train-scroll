import { motion, useTransform, MotionValue } from "framer-motion";

interface ParallaxSceneProps {
  scrollProgress: MotionValue<number>;
}

const ParallaxScene = ({ scrollProgress }: ParallaxSceneProps) => {
  // Different scroll speeds for parallax effect
  const cloudX1 = useTransform(scrollProgress, [0, 1], ["0%", "-30%"]);
  const cloudX2 = useTransform(scrollProgress, [0, 1], ["0%", "-50%"]);
  const mountainX = useTransform(scrollProgress, [0, 1], ["0%", "-10%"]);
  const hillsX = useTransform(scrollProgress, [0, 1], ["0%", "-20%"]);
  const groundX = useTransform(scrollProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 scene-gradient" />

      {/* Sun */}
      <div
        className="absolute top-16 right-1/4 w-24 h-24 rounded-full"
        style={{
          background: `radial-gradient(circle, 
            hsl(45, 100%, 85%) 0%, 
            hsl(40, 100%, 75%) 40%, 
            transparent 70%)`,
        }}
      />

      {/* Clouds layer 1 (far) */}
      <motion.div className="absolute top-[10%] w-[200%] h-32" style={{ x: cloudX1 }}>
        <Cloud className="absolute left-[5%] top-0 w-32 h-16 opacity-80" />
        <Cloud className="absolute left-[25%] top-8 w-40 h-20 opacity-70" />
        <Cloud className="absolute left-[50%] top-2 w-28 h-14 opacity-75" />
        <Cloud className="absolute left-[75%] top-6 w-36 h-18 opacity-65" />
        <Cloud className="absolute left-[95%] top-4 w-32 h-16 opacity-80" />
        <Cloud className="absolute left-[115%] top-10 w-40 h-20 opacity-70" />
        <Cloud className="absolute left-[140%] top-0 w-28 h-14 opacity-75" />
      </motion.div>

      {/* Clouds layer 2 (closer) */}
      <motion.div className="absolute top-[18%] w-[200%] h-32" style={{ x: cloudX2 }}>
        <Cloud className="absolute left-[10%] top-0 w-20 h-10 opacity-90" />
        <Cloud className="absolute left-[35%] top-4 w-24 h-12 opacity-85" />
        <Cloud className="absolute left-[60%] top-2 w-18 h-9 opacity-90" />
        <Cloud className="absolute left-[85%] top-6 w-22 h-11 opacity-80" />
        <Cloud className="absolute left-[110%] top-0 w-20 h-10 opacity-90" />
        <Cloud className="absolute left-[135%] top-4 w-24 h-12 opacity-85" />
      </motion.div>

      {/* Far mountains */}
      <motion.div
        className="absolute bottom-[35%] w-[200%] h-[30%]"
        style={{ x: mountainX }}
      >
        <svg
          viewBox="0 0 2000 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="farMountain" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(220, 35%, 75%)" />
              <stop offset="100%" stopColor="hsl(220, 30%, 65%)" />
            </linearGradient>
          </defs>
          <path
            d="M0 300 L0 180 Q100 80 200 150 Q300 60 400 120 Q500 40 600 100 
               Q700 20 800 80 Q900 50 1000 120 Q1100 30 1200 90 
               Q1300 60 1400 130 Q1500 40 1600 100 Q1700 70 1800 140 
               Q1900 50 2000 120 L2000 300 Z"
            fill="url(#farMountain)"
          />
          {/* Snow caps */}
          <path
            d="M490 55 L500 40 L510 55 Q505 52 500 55 Q495 52 490 55"
            fill="white"
            opacity="0.8"
          />
          <path
            d="M690 35 L700 20 L710 35 Q705 32 700 35 Q695 32 690 35"
            fill="white"
            opacity="0.8"
          />
          <path
            d="M1090 45 L1100 30 L1110 45 Q1105 42 1100 45 Q1095 42 1090 45"
            fill="white"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Mid hills with trees silhouette */}
      <motion.div
        className="absolute bottom-[25%] w-[200%] h-[25%]"
        style={{ x: hillsX }}
      >
        <svg
          viewBox="0 0 2000 250"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="midHills" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(150, 30%, 50%)" />
              <stop offset="100%" stopColor="hsl(140, 35%, 40%)" />
            </linearGradient>
          </defs>
          <path
            d="M0 250 L0 150 Q50 100 100 130 Q150 80 200 110 Q250 70 300 100 
               Q400 60 500 90 Q600 50 700 80 Q800 60 900 100 
               Q1000 70 1100 95 Q1200 55 1300 85 Q1400 65 1500 100 
               Q1600 75 1700 105 Q1800 80 1900 110 Q1950 90 2000 120 L2000 250 Z"
            fill="url(#midHills)"
          />
          {/* Tree silhouettes */}
          <g fill="hsl(140, 40%, 30%)">
            <TreeSilhouette x={50} y={120} size={30} />
            <TreeSilhouette x={120} y={100} size={25} />
            <TreeSilhouette x={200} y={90} size={35} />
            <TreeSilhouette x={350} y={75} size={28} />
            <TreeSilhouette x={450} y={70} size={32} />
            <TreeSilhouette x={550} y={65} size={26} />
            <TreeSilhouette x={700} y={60} size={30} />
            <TreeSilhouette x={850} y={80} size={28} />
            <TreeSilhouette x={950} y={85} size={34} />
            <TreeSilhouette x={1100} y={75} size={29} />
            <TreeSilhouette x={1250} y={65} size={31} />
            <TreeSilhouette x={1400} y={80} size={27} />
            <TreeSilhouette x={1550} y={85} size={33} />
            <TreeSilhouette x={1700} y={90} size={28} />
            <TreeSilhouette x={1850} y={95} size={30} />
          </g>
        </svg>
      </motion.div>

      {/* Ground with grass texture */}
      <motion.div
        className="absolute bottom-0 w-[200%] h-[30%]"
        style={{ x: groundX }}
      >
        <svg
          viewBox="0 0 2000 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ground" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(90, 40%, 50%)" />
              <stop offset="60%" stopColor="hsl(80, 35%, 45%)" />
              <stop offset="100%" stopColor="hsl(70, 30%, 35%)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="2000" height="300" fill="url(#ground)" />
          
          {/* Railway track bed */}
          <rect x="0" y="40" width="2000" height="35" fill="hsl(30, 15%, 40%)" />
          <rect x="0" y="50" width="2000" height="15" fill="hsl(25, 10%, 50%)" />
          
          {/* Rails */}
          <rect x="0" y="48" width="2000" height="4" fill="hsl(0, 0%, 60%)" />
          <rect x="0" y="58" width="2000" height="4" fill="hsl(0, 0%, 60%)" />
          
          {/* Rail ties */}
          {Array.from({ length: 100 }).map((_, i) => (
            <rect
              key={i}
              x={i * 20}
              y="45"
              width="8"
              height="22"
              fill="hsl(25, 30%, 30%)"
            />
          ))}
        </svg>
      </motion.div>

      {/* Grass details in foreground */}
      <motion.div
        className="absolute bottom-0 w-[200%] h-16 pointer-events-none"
        style={{ x: groundX }}
      >
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${i * 2.5}%`,
              width: "2px",
              height: `${8 + Math.random() * 12}px`,
              background: `hsl(${80 + Math.random() * 20}, ${40 + Math.random() * 20}%, ${35 + Math.random() * 15}%)`,
              transform: `rotate(${-5 + Math.random() * 10}deg)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// Cloud component
const Cloud = ({ className }: { className: string }) => (
  <div
    className={className}
    style={{
      background: `radial-gradient(ellipse at center, 
        white 0%, 
        hsl(0, 0%, 95%) 40%, 
        transparent 70%)`,
      borderRadius: "50%",
    }}
  />
);

// Tree silhouette for hills
const TreeSilhouette = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <path
    d={`M${x} ${y + size} L${x} ${y + size * 0.6} 
        L${x - size * 0.3} ${y + size * 0.6} L${x} ${y + size * 0.2} 
        L${x - size * 0.2} ${y + size * 0.2} L${x} ${y} 
        L${x + size * 0.2} ${y + size * 0.2} 
        L${x + size * 0.3} ${y + size * 0.6} L${x} ${y + size * 0.6}`}
  />
);

export default ParallaxScene;
