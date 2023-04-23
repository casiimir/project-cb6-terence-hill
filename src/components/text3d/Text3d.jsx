import { extend } from "@react-three/fiber";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import Anton from "@/assets/Anton_Regular.json"
import styles from "./text3d.module.scss";
import { Plane } from "@react-three/drei";


extend ({TextGeometry})

export default function Text() {
    
    const font = new FontLoader().parse(Anton);
  return(
        <mesh>
            <textGeometry  
            args={['La tua destinazione \nper i migliori eventi',  
            {font, size: 10, height: 2,}]} 
            />
            <meshPhysicalMaterial 
            castShadow 
            receiveShadow 
            attach='material' 
            color={'#de724e'}  
            />
        </mesh>
    );
}
