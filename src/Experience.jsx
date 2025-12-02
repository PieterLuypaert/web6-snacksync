import { Canvas } from "@react-three/fiber";
import React from "react";
import { Boterham } from "./components/Boterham/Boterham";


const Experience = () => {
    return (
        <>
        <Canvas>
            <directionalLight position={[0, 10, 15]} intensity={3}/>
            <ambientLight intensity={0.5}/>
            {/* model */}
            <Boterham scale={0.5} />
        </Canvas>
        </>
    );
};
export default Experience;