import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Marilena from '../../Prov/Marilena';
import styles from "./scena1.module.scss";

export default function Scena() {
   return (
      <Canvas
         camera={{ position: [2, 1, 6.00], fov: 17 }}
         style={{
            backgroundColor: '#1c1c1c',
            width: '300px',
            height: '500px',
            borderRadius: '10px',
         }}
      >
         <ambientLight intensity={0.4} />
         <ambientLight intensity={0.02} />
         <directionalLight intensity={0.2} />
         <Suspense fallback={null}>
            <Marilena position={[0.025, -0.9, 0]} /> 
            {/* // your model here */}
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}