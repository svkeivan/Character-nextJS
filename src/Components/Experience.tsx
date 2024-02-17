import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { PlaneGeometry } from "three";

import CanvasLoader from "./CanvasLoader";
import Girls from "./Girls";

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
        intensity={2}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -0.75, 0]}>
        <Suspense fallback={<CanvasLoader />}>
          <Girls />
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
