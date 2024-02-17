"use client";
import { createContext, useContext, useState } from "react";

interface CharacterAnimationsContextInterface {
  animationIndex: number;
  setAnimationIndex: (index: number) => void;
  animations: string[];
  setAnimations: (animations: string[]) => void;
}

const CharacterAnimationsContext =
  createContext<CharacterAnimationsContextInterface>({
    animationIndex: 0,
    setAnimationIndex: () => {},
    animations: [],
    setAnimations: () => {},
  });

export const CharacterAnimationsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
