import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Text3d from '@/components/text3d/Text3d';
import styles from "./scena.module.scss";



export default function Scena() {
   return (
 
      <Canvas
         colorManagement
         ShadowMap
         camera={{ position: [50, 25, 120], fov: 40 }}
         style={{
            backgroundColor: 'trasparent',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
         }}
      >
         
         <ambientLight intensity={0.2} />
         {/* <ambientLight intensity={0.03} /> */}
         <directionalLight 
          intensity={0.8}
          position = {[20,120,50]} 
          castShadow 
         />
         <group>
            <mesh  position ={[-60, 0,0]}>
            <Text3d />
            </mesh>
          </group>
         <Suspense fallback={null}>
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}