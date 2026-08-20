"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
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

export default function AstronautScene() {
  const reduce = !!useReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 32 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} />
      <pointLight position={[-3, -1, -2]} intensity={8} color="#eafe07" />
      <Suspense fallback={<LoadingPlaceholder />}>
        <AstronautModel reduceMotion={reduce} />
        <Stars
          radius={40}
          depth={20}
          count={reduce ? 200 : 1200}
          factor={2.4}
          saturation={0}
          fade
          speed={reduce ? 0 : 0.4}
        />
      </Suspense>
    </Canvas>
  );
}
