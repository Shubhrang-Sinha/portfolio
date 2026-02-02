import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as THREE from 'three';
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';





const App = () => {
    return(
        <Canvas style = {{height: '110vh', width: '100vw', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <OrbitControls enableZoom  enablePan  enableRotate></OrbitControls>

            <directionalLight position = {[1,1,1]} intensity={10} color={0x9CDBA6}></directionalLight>

            <color attach={"background"} args={['#f0f0f0']}></color>

        </Canvas>
        
    )
  
}

export default App
