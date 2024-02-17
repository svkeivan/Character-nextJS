"use client";
import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { PlaneGeometry } from "three";
import Woman from "./Woman";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";

extend({ PlaneGeometry });

const Experience = () => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight />
      <directionalLight
        intensity={1.5}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -0.75, 0]}>
        <Suspense fallback={<CanvasLoader />}>
          <Woman />
        </Suspense>
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -0.75, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.1} />
      </mesh>
    </>
  );
};

export default Experience;
