import { useState } from "react";

/* ---------------------------------------------------------------------------
   Faint line-art behind the "Our Approach" section (wind turbines + houses).

   1. If the picture  public/images/about/bg-approach.png  exists, it is used
      (lazy loaded).
   2. If it is missing, the same kind of drawing below is shown instead,
      so the section never looks empty.
--------------------------------------------------------------------------- */

const line = "#CDCDCD";

// one wind turbine: tower + hub + 3 thin blades
function Turbine({ x, hub, len, spin = 0 }) {
  const blades = [0, 120, 240].map((a) => {
    const rad = ((a + spin - 90) * Math.PI) / 180;
    const tx = x + Math.cos(rad) * len;
    const ty = hub + Math.sin(rad) * len;
    const nx = -Math.sin(rad) * 5; // blade width
    const ny = Math.cos(rad) * 5;
    return (
      <path
        key={a}
        d={`M${x} ${hub} Q${x + (tx - x) * 0.4 + nx} ${hub + (ty - hub) * 0.4 + ny} ${tx} ${ty} Q${x + (tx - x) * 0.4 - nx * 0.2} ${hub + (ty - hub) * 0.4 - ny * 0.2} ${x} ${hub}Z`}
      />
    );
  });

  return (
    <g>
      <path d={`M${x - 8} 720 L${x - 2.5} ${hub} M${x + 8} 720 L${x + 2.5} ${hub}`} />
      <circle cx={x} cy={hub} r="4" />
      {blades}
    </g>
  );
}

function LineArt() {
  return (
    <svg
      viewBox="0 0 1349 720"
      preserveAspectRatio="xMidYMax slice"
      className="h-full w-full"
      fill="none"
      stroke={line}
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* wind turbines (left / middle) */}
      <Turbine x={172} hub={250} len={125} spin={18} />
      <Turbine x={380} hub={345} len={112} spin={48} />
      <Turbine x={34} hub={420} len={80} spin={95} />
      <Turbine x={585} hub={455} len={86} spin={10} />

      {/* ground line */}
      <path d="M0 706 H1349" />

      {/* round bush / tree (left of the houses) */}
      <path d="M560 706c-8-26 6-48 30-48 6-24 40-30 54-10 22-6 40 10 36 32 14 6 20 18 14 26" />
      <path d="M588 706c4-14 20-18 30-8M628 706c2-10 14-14 22-8" />

      {/* tall building */}
      <rect x="724" y="520" width="104" height="200" />
      <path d="M724 560h104M724 600h104M754 520v200M792 520v200" />
      <rect x="748" y="640" width="40" height="66" />

      {/* house with chimney */}
      <path d="M850 706V590l56-70 56 70v116" />
      <path d="M862 560v-26h14v14" />
      <rect x="884" y="610" width="40" height="46" />
      <path d="M904 610v46M884 633h40" />
      <rect x="896" y="670" width="20" height="36" />

      {/* office block */}
      <rect x="1030" y="548" width="104" height="172" />
      <path d="M1030 590h104M1030 632h104M1030 674h104M1064 548v172M1100 548v172" />

      {/* right building + tree */}
      <rect x="1160" y="500" width="62" height="220" />
      <path d="M1160 540h62M1160 580h62M1160 620h62M1160 660h62M1191 500v220" />
      <circle cx="1236" cy="672" r="28" />
      <path d="M1236 700v6" />
    </svg>
  );
}

function ApproachBackground({ src }) {
  const [failed, setFailed] = useState(!src);

  if (failed) return <LineArt />;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-bottom opacity-70"
    />
  );
}

export default ApproachBackground;
