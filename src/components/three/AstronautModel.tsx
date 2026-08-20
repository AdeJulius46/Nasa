"use client";

import { useRef } from "react";
import { useGLTF, Float, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

useGLTF.preload("/models/astronaut.glb");

export default function AstronautModel({ reduceMotion }: { reduceMotion: boolean }) {
  const { scene } = useGLTF("/models/astronaut.glb");
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (reduceMotion || !group.current) return;
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <Float
      speed={reduceMotion ? 0 : 1.4}
      rotationIntensity={reduceMotion ? 0 : 0.3}
      floatIntensity={reduceMotion ? 0 : 0.7}
    >
      <group ref={group}>
        <Center>
          <primitive object={scene} scale={1.4} />
        </Center>
      </group>
    </Float>
  );
}
