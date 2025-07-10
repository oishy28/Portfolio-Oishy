import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import Computer from "./Computer";

const OscillatingGroup = ({ children, ...props }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  const directionRef = useRef(1);

  useFrame(() => {
    if (!groupRef.current || hovered) return;

    const maxAngle = Math.PI / 4; // 45 degrees
    const minAngle = -Math.PI / 4; // -45 degrees
    const speed = 0.002;

    groupRef.current.rotation.y += directionRef.current * speed;

    if (groupRef.current.rotation.y >= maxAngle) {
      groupRef.current.rotation.y = maxAngle;
      directionRef.current = -1;
    } else if (groupRef.current.rotation.y <= minAngle) {
      groupRef.current.rotation.y = minAngle;
      directionRef.current = 1;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      {children}
    </group>
  );
};

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 11], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} color="#ffe6ff" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground Plane */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#ff99ff" />
      </mesh>

      {/* Oscillating 3D Model */}
      <OscillatingGroup scale={0.03} position={[0, -1.49, 0]} castShadow>
        <Computer />
      </OscillatingGroup>
    </Canvas>
  );
};

export default ContactExperience;
