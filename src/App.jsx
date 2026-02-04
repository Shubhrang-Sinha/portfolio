import { useRef, useState } from 'react'

import * as THREE from 'three';
import {Canvas, useFrame} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei';
import Navbar from './sections/navbar.jsx';
import Hero from './sections/hero.jsx';







const App = () => {
    return(
        <main className='max-w-7xl mx-auto'>
            <Navbar/>
            <Hero/>
           

        </main>
    )
  
}

export default App
