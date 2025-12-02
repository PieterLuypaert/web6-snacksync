import { Canvas } from "@react-three/fiber";
import React from "react";

const Experience = () => {
    return (
        <>
        <Canvas>
            <directionalLight position={[0, 10, 15]} intensity={3}/>
            <ambientLight intensity={0.5}/>
            {/* model */}
        </Canvas>
        </>
    );
};
export default Experience;