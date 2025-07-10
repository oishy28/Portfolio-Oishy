// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React from 'react'
// import { useMediaQuery } from 'react-responsive';
// import { Room } from './Room' // Adjust the import path as necessary
// import HeroLights from './HeroLights';
// import Particles from './Particles'; // Adjust the import path as necessary

// const HeroExperience = () => {

//   const isTablet = useMediaQuery({query:'(max-width: 1024px)'});
//   const isMobile = useMediaQuery({query:'(max-width: 768px)'});

//   return (
//     <Canvas camera={{position:[0,0,15],fov:45}}>
        
//         <OrbitControls
//             enableZoom={!isTablet}
//             enablePan={false}
//             maxDistance={20}
//             minDistance={5}
//             maxPolarAngle={Math.PI / 5}
//             minPolarAngle={Math.PI / 2}
//         />
//         <HeroLights />
//         <Particles count={200} />
//         <group
//         scale={isMobile ? 0.7 : 1}
//         position={[0,-3.5,0]}
//         rotation={[0, Math.PI / 4, 0]}
//         >
//           <Room />
//         </group>
//     </Canvas>
//   )
// }

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const RotatingGroup = ({ children, ...props }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {children}
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });

  // ✅ Define default (desktop)
  let scale = 0.013;
  let position = [-1.6, -2.2, 0];

  // 📱 Mobile adjustments
  if (isMobile) {
    scale = 0.0055;
    position = [-0.3, -1.6, 0]; // more center and higher
  }

  // 📱 Tablet adjustments
  if (isTablet) {
    scale = 0.0065;
    position = [-1.2, -2.1, 0];
  }

  return (
    <Canvas
      camera={{ position: [0, 2, 15], fov: 35 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        zIndex: 0,
      }}
    >
      <OrbitControls
        enableZoom
        enablePan={false}
        maxDistance={30}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
      />
      <HeroLights />
      <Particles count={isMobile ? 200 : 300} />

      <RotatingGroup scale={scale} position={position}>
        <Room />
      </RotatingGroup>
    </Canvas>
  );
};

export default HeroExperience;
