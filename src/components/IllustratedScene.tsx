import { motion, MotionValue, useTransform } from "framer-motion";

interface IllustratedSceneProps {
  scrollProgress: MotionValue<number>;
}

const IllustratedScene = ({ scrollProgress }: IllustratedSceneProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky gradient - Blue theme */}
      <div className="absolute inset-0 sky-gradient" />

      {/* Clouds */}
      <Cloud x="5%" y="8%" size={120} delay={0} />
      <Cloud x="25%" y="15%" size={80} delay={2} />
      <Cloud x="60%" y="10%" size={100} delay={4} />
      <Cloud x="80%" y="18%" size={90} delay={1} />
      <Cloud x="45%" y="5%" size={70} delay={3} />

      {/* Distant city silhouette */}
      <svg
        className="absolute top-[18%] left-0 w-full h-32 opacity-40"
        viewBox="0 0 1920 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150 L0 100 L50 100 L50 80 L70 80 L70 100 L100 100 L100 60 L120 60 L120 100 
             L200 100 L200 90 L220 90 L220 70 L240 70 L240 100 L300 100 L300 50 L320 50 L320 100
             L400 100 L400 80 L420 80 L420 60 L440 60 L440 100 L500 100 L500 70 L520 70 L520 100
             L600 100 L600 85 L620 85 L620 100 L700 100 L700 55 L720 55 L720 100
             L800 100 L800 75 L820 75 L820 100 L900 100 L900 65 L920 65 L920 100
             L1000 100 L1000 80 L1020 80 L1020 100 L1100 100 L1100 45 L1120 45 L1120 100
             L1200 100 L1200 70 L1220 70 L1220 100 L1300 100 L1300 85 L1320 85 L1320 100
             L1400 100 L1400 55 L1420 55 L1420 100 L1500 100 L1500 75 L1520 75 L1520 100
             L1600 100 L1600 90 L1620 90 L1620 100 L1700 100 L1700 60 L1720 60 L1720 100
             L1800 100 L1800 80 L1820 80 L1820 100 L1920 100 L1920 150 Z"
          fill="hsl(220, 50%, 40%)"
        />
      </svg>

      {/* Far hills (light blue) */}
      <svg
        className="absolute bottom-[40%] left-0 w-full h-[35%]"
        viewBox="0 0 1920 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="farHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 55%, 50%)" />
            <stop offset="100%" stopColor="hsl(225, 50%, 42%)" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 L0 200 
             Q100 120 200 180 Q300 100 400 150 Q500 80 600 130 
             Q700 60 800 120 Q900 70 1000 140 Q1100 90 1200 150
             Q1300 100 1400 160 Q1500 110 1600 170 Q1700 130 1800 190
             Q1900 150 1920 180 L1920 400 Z"
          fill="url(#farHill)"
        />
      </svg>

      {/* Mid hills (medium blue) */}
      <svg
        className="absolute bottom-[25%] left-0 w-full h-[40%]"
        viewBox="0 0 1920 450"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="midHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(225, 55%, 40%)" />
            <stop offset="100%" stopColor="hsl(230, 50%, 32%)" />
          </linearGradient>
        </defs>
        <path
          d="M0 450 L0 280
             Q80 200 160 250 Q240 180 320 230 Q400 160 480 220
             Q560 150 640 200 Q720 130 800 190 Q880 140 960 200
             Q1040 160 1120 210 Q1200 170 1280 220 Q1360 180 1440 230
             Q1520 190 1600 240 Q1680 200 1760 250 Q1840 210 1920 260 
             L1920 450 Z"
          fill="url(#midHill)"
        />
        
        {/* Trees on mid hills */}
        <g>
          <TreeSilhouette x={80} y={220} size={80} />
          <TreeSilhouette x={200} y={200} size={60} />
          <TreeSilhouette x={400} y={180} size={70} />
          <TreeSilhouette x={600} y={160} size={85} />
          <TreeSilhouette x={900} y={170} size={75} />
          <TreeSilhouette x={1100} y={185} size={65} />
          <TreeSilhouette x={1300} y={195} size={80} />
          <TreeSilhouette x={1500} y={205} size={70} />
          <TreeSilhouette x={1700} y={215} size={75} />
        </g>
      </svg>

      {/* Viaduct/Bridge */}
      <svg
        className="absolute bottom-[28%] left-0 w-full h-[25%]"
        viewBox="0 0 1920 300"
        preserveAspectRatio="none"
      >
        {/* Bridge arches - White/Light gray */}
        <g fill="hsl(0, 0%, 92%)">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <path
              key={i}
              d={`M${i * 160 + 20} 180 
                  Q${i * 160 + 100} 80 ${i * 160 + 180} 180 
                  L${i * 160 + 160} 180 
                  Q${i * 160 + 100} 100 ${i * 160 + 40} 180 Z`}
            />
          ))}
        </g>
        
        {/* Bridge top rail - Blue */}
        <rect x="0" y="60" width="1920" height="8" fill="hsl(220, 60%, 35%)" />
        <rect x="0" y="72" width="1920" height="3" fill="hsl(0, 75%, 50%)" />
      </svg>

      {/* Near hills (dark blue) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[45%]"
        viewBox="0 0 1920 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="nearHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(230, 60%, 28%)" />
            <stop offset="100%" stopColor="hsl(235, 65%, 18%)" />
          </linearGradient>
        </defs>
        <path
          d="M0 500 L0 200
             Q60 150 120 180 Q180 120 240 160 Q300 100 360 150
             Q420 80 480 130 Q540 90 600 140 Q660 100 720 150
             Q780 110 840 160 Q900 120 960 170 Q1020 130 1080 180
             Q1140 140 1200 190 Q1260 150 1320 200 Q1380 160 1440 210
             Q1500 170 1560 220 Q1620 180 1680 230 Q1740 190 1800 240
             Q1860 200 1920 250 L1920 500 Z"
          fill="url(#nearHill)"
        />
        
        {/* Large oval trees */}
        <OvalTree x={100} y={100} width={120} height={200} />
        <OvalTree x={350} y={80} width={100} height={180} />
        <OvalTree x={1500} y={90} width={130} height={210} />
        <OvalTree x={1750} y={100} width={110} height={190} />
        
        {/* Small round bushes */}
        <circle cx={250} cy={170} r={35} fill="hsl(230, 55%, 32%)" />
        <circle cx={500} cy={150} r={25} fill="hsl(228, 58%, 28%)" />
        <circle cx={700} cy={165} r={30} fill="hsl(230, 55%, 30%)" />
        <circle cx={1200} cy={180} r={28} fill="hsl(228, 56%, 31%)" />
        <circle cx={1400} cy={175} r={32} fill="hsl(230, 55%, 28%)" />
      </svg>

      {/* Foreground (darkest blue) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[35%]"
        viewBox="0 0 1920 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="frontHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(235, 65%, 18%)" />
            <stop offset="100%" stopColor="hsl(240, 70%, 12%)" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 L0 150
             Q100 100 200 130 Q300 80 400 120 Q500 70 600 110
             Q700 60 800 100 Q900 70 1000 110 Q1100 80 1200 120
             Q1300 90 1400 130 Q1500 100 1600 140 Q1700 110 1800 150
             Q1860 130 1920 160 L1920 400 Z"
          fill="url(#frontHill)"
        />
        
        {/* Foreground trees */}
        <OvalTree x={-30} y={30} width={140} height={220} dark />
        <OvalTree x={300} y={50} width={100} height={160} dark />
        <OvalTree x={1100} y={60} width={90} height={150} dark />
        <OvalTree x={1600} y={40} width={130} height={200} dark />
        <OvalTree x={1850} y={50} width={120} height={190} dark />
        
        {/* Red and White flowers */}
        <Flower x={180} y={180} color="red" />
        <Flower x={220} y={200} color="white" />
        <Flower x={450} y={150} color="red" />
        <Flower x={650} y={130} color="white" />
        <Flower x={750} y={140} color="red" />
        <Flower x={950} y={145} color="white" />
        <Flower x={1050} y={155} color="red" />
        <Flower x={1300} y={165} color="white" />
        <Flower x={1400} y={170} color="red" />
        <Flower x={1550} y={175} color="white" />
        <Flower x={1700} y={160} color="red" />
        
        {/* Circle flowers */}
        <CircleFlower x={500} y={120} color="white" />
        <CircleFlower x={850} y={125} color="red" />
        <CircleFlower x={1150} y={140} color="white" />
        <CircleFlower x={1450} y={155} color="red" />
        <CircleFlower x={1780} y={145} color="white" />
      </svg>
    </div>
  );
};

// Cloud component with floating animation
const Cloud = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.svg
    className="absolute"
    style={{ left: x, top: y }}
    width={size}
    height={size * 0.6}
    viewBox="0 0 100 60"
    animate={{ x: [0, 20, 0] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <ellipse cx="30" cy="40" rx="25" ry="18" fill="hsl(0, 0%, 98%)" opacity="0.9" />
    <ellipse cx="55" cy="35" rx="30" ry="22" fill="hsl(0, 0%, 98%)" opacity="0.9" />
    <ellipse cx="75" cy="42" rx="22" ry="16" fill="hsl(0, 0%, 98%)" opacity="0.9" />
    <ellipse cx="50" cy="45" rx="35" ry="15" fill="hsl(0, 0%, 98%)" opacity="0.9" />
  </motion.svg>
);

// Oval tree component
const OvalTree = ({ x, y, width, height, dark = false }: { x: number; y: number; width: number; height: number; dark?: boolean }) => (
  <g>
    {/* Trunk */}
    <rect
      x={x + width / 2 - 8}
      y={y + height - 30}
      width={16}
      height={50}
      fill={dark ? "hsl(240, 70%, 12%)" : "hsl(235, 60%, 22%)"}
    />
    {/* Foliage */}
    <ellipse
      cx={x + width / 2}
      cy={y + height / 2}
      rx={width / 2}
      ry={height / 2}
      fill={dark ? "hsl(240, 75%, 15%)" : "hsl(235, 65%, 22%)"}
    />
  </g>
);

// Tree silhouette for background hills
const TreeSilhouette = ({ x, y, size }: { x: number; y: number; size: number }) => (
  <g fill="hsl(225, 50%, 35%)">
    <rect x={x + size / 2 - 4} y={y} width={8} height={size * 0.3} />
    <ellipse cx={x + size / 2} cy={y - size * 0.2} rx={size / 3} ry={size / 2} />
  </g>
);

// Flower component - Red and White theme
const Flower = ({ x, y, color }: { x: number; y: number; color: "red" | "white" }) => {
  const fillColor = color === "red" ? "hsl(0, 80%, 55%)" : "hsl(0, 0%, 95%)";
  return (
    <g>
      {/* Stem */}
      <rect x={x - 2} y={y} width={4} height={60} fill="hsl(230, 50%, 25%)" />
      {/* Petals */}
      <path
        d={`M${x} ${y - 5} 
            C${x - 12} ${y - 25} ${x - 8} ${y - 45} ${x} ${y - 40}
            C${x + 8} ${y - 45} ${x + 12} ${y - 25} ${x} ${y - 5}`}
        fill={fillColor}
      />
      <ellipse cx={x} cy={y - 25} rx={6} ry={10} fill={fillColor} />
    </g>
  );
};

// Simple circle flower
const CircleFlower = ({ x, y, color }: { x: number; y: number; color: "white" | "red" }) => {
  const fillColor = color === "white" ? "hsl(0, 0%, 95%)" : "hsl(0, 75%, 50%)";
  return (
    <g>
      <rect x={x - 2} y={y} width={4} height={50} fill="hsl(230, 50%, 25%)" />
      <circle cx={x} cy={y - 8} r={10} fill={fillColor} />
    </g>
  );
};

export default IllustratedScene;
