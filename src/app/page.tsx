"use client";
import { Canvas } from "@react-three/fiber";
// import Experience from "../Components/Experience";
import dynamic from "next/dynamic";
import AnimationButtons from "../Components/AnimationButtons";
import { CharacterAnimationsProvider } from "../Contexts/CharacterAnimations";

const Experience = dynamic(() => import("../Components/Experience"), {
  ssr: false,
});
export default function Home() {
  return (
    <CharacterAnimationsProvider>
      <Canvas camera={{ position: [3, 1.5, 2.5], fov: 50 }} shadows>
        <Experience />
      </Canvas>
      <AnimationButtons />
    </CharacterAnimationsProvider>
  );
}
