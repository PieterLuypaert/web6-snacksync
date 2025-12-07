import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import AnimatedSandwich from "./components/Scene/AnimatedSandwich";

const Experience = () => {
  return (
    <Canvas
      camera={{ position: [0, 4, 9], fov: 45 }}
      shadows
      gl={{ alpha: true, antialias: true }}
    >
      <Environment preset="city" intensity={0.8} />

      <directionalLight
        position={[5, 10, 7.5]}
        intensity={1.5}
        castShadow
        shadow-bias={-0.001}
      />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <AnimatedSandwich />

      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.4}
        scale={15}
        blur={2.5}
        far={4}
        color="#000000"
      />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 2} 
        minDistance={4}
        maxDistance={12}
      />
    </Canvas>
  );
};

export default Experience;
