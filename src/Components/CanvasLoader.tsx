import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col items-center justify-center">
      <span className="canvas-loader"></span>
      <p className="mt-16 font-bold text-gray-600">{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
