"use client";
import { useCharacterAnimations } from "../Contexts/CharacterAnimations";

const AnimationButtons = () => {
  const { animationIndex, setAnimationIndex, animations } =
    useCharacterAnimations();

  if (!animations) {
    return null;
  }

  return (
    <div className="fixed bottom-16 right-16 max-w-xl">
      <div className="flex flex-col items-stretch justify-center gap-3">
        {animations.map((animation: string, i: number) => {
          return (
            <button
              key={`animationButoon${i}`}
              onClick={() => setAnimationIndex(i)}
              className={`rounded-lg bg-green-600 p-2 text-white ${
                animationIndex === i ? "bg-green-800" : ""
              }`}
            >
              {animation}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnimationButtons;
