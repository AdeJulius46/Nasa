"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Environment, Bounds } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import AstronautModel from "./AstronautModel";

function LoadingPlaceholder() {
  return (
    <mesh>
      <sphereGeometry args={[0.35, 16, 16]} />
      <meshBasicMaterial color="#eafe07" wireframe />
    </mesh>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export default function AstronautScene() {
  const reduce = !!useReducedMotion();
  const isMobile = useIsMobile();
  const lightweight = reduce || isMobile;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />
      <pointLight position={[-3, -1, -2]} intensity={8} color="#eafe07" />
      <Suspense fallback={<LoadingPlaceholder />}>
        <Environment preset="night" />
        <Bounds fit clip margin={1.3}>
          <AstronautModel reduceMotion={reduce} />
        </Bounds>
        <Stars
          radius={40}
          depth={20}
          count={lightweight ? 250 : 1200}
          factor={2.4}
          saturation={0}
          fade
          speed={reduce ? 0 : 0.4}
        />
      </Suspense>
    </Canvas>
  );
}
