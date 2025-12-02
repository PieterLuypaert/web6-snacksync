import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Boterham = forwardRef(({ showParts = {} }, ref) => {
  const { nodes, materials } = useGLTF("/boterham.glb");

  const tomato1Ref = useRef();
  const tomato2Ref = useRef();
  const tomato3Ref = useRef();
  const tomato4Ref = useRef();

  const cheese1Ref = useRef();
  const cheese2Ref = useRef();

  const forkRef = useRef();

  // Export refs so parent can animate them
  React.useImperativeHandle(ref, () => ({
    group: ref,
    tomatoes: [tomato1Ref, tomato2Ref, tomato3Ref, tomato4Ref],
    cheeses: [cheese1Ref, cheese2Ref],
    fork: forkRef,
  }));

  return (
    <group ref={ref} dispose={null}>
      {/* Plate - always visible */}
      <mesh
        castShadow
        receiveShadow={false}
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.006"]}
        position={[-0.077, -0.354, -0.515]}
        scale={[6.325, 0.107, 6.325]}
      />

      {/* Bottom Bread */}
      {showParts.hasBread && (
        <group
          position={[0, 0.169, -0.265]}
          rotation={[3.137, 0, 0]}
          scale={[2.421, 1, 3.376]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials["Material.007"]}
          />
        </group>
      )}

      {/* Cheese layer */}
      {showParts.hasCheese && showParts.hasBread && (
        <>
          <mesh
            ref={cheese1Ref}
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials["Material.004"]}
            position={[-0.046, 0.976, -2.057]}
            rotation={[-0.005, 0.562, -Math.PI]}
            scale={[1.706, 1, 1.323]}
          />
          <mesh
            ref={cheese2Ref}
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials["Material.004"]}
            position={[0.114, 1.061, 1.54]}
            rotation={[-0.005, 0.562, -Math.PI]}
            scale={[1.706, 1, 1.323]}
          />
        </>
      )}

      {/* Lettuce layer */}
      {showParts.hasLettuce && showParts.hasBread && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.002"]}
          position={[0.011, 0.007, -0.316]}
          rotation={[3.137, 0, 0]}
          scale={[3.032, 1, 3.835]}
        />
      )}

      {/* Tomato pieces */}
      {showParts.hasTomato && showParts.hasBread && (
        <>
          <mesh
            ref={tomato1Ref}
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials["Material.003"]}
            position={[1.704, 0.543, -1.971]}
          />
          <mesh
            ref={tomato2Ref}
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Material.003"]}
            position={[1.592, 0.546, 0.728]}
          />
          <mesh
            ref={tomato3Ref}
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials["Material.003"]}
            position={[-1.524, 0.551, -1.971]}
          />
          <mesh
            ref={tomato4Ref}
            castShadow
            receiveShadow
            geometry={nodes.Circle004.geometry}
            material={materials["Material.003"]}
            position={[-1.328, 0.538, 0.98]}
          />
        </>
      )}

      {/* Top Bread */}
      {showParts.hasTopBread && showParts.hasBread && (
        <group
          position={[0, -0.901, -0.259]}
          rotation={[3.137, 0, 0]}
          scale={[2.421, 1, 3.376]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials["Material.007"]}
          />
        </group>
      )}

      {/* Fork - show when hasFork is true */}
      {showParts.hasFork && (
        <mesh
          ref={forkRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube_fork_0.geometry}
          material={nodes.Cube_fork_0.material}
          position={[-0.296, 3.679, -2.267]}
          rotation={[1.208, -0.127, 0.237]}
          scale={[1.054, 1.628, 1.56]}
        />
      )}
    </group>
  );
});

Boterham.displayName = "Boterham";

useGLTF.preload("/boterham.glb");
