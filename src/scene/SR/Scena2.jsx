import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Stefania from '../../Prov/Stefania';
import styles from "./scena2.module.scss";

export default function Scena2() {
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
         <ambientLight intensity={0.5} />
         <ambientLight intensity={0.02} />
         <directionalLight intensity={0.1} />
         <Suspense fallback={null}>
            <Stefania position={[0.025, -0.9, 0]} /> 
            {/* // your model here */}
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}