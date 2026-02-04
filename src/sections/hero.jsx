import React from 'react';
import Navbar from './navbar';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import { Canvas } from '@react-three/fiber';
import { Html } from "@react-three/drei";



const Hero = () =>{
    return(
       <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Shubhrang <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-blue_gradient">Building Stories</p>
      </div>
      <div className='w-full h-full absolute inset-0'>
        <Canvas className = 'w-full h-full'>
            <PerspectiveCamera makeDefault position={[0,0,30]}></PerspectiveCamera>
            <HackerRoom/>
        </Canvas>

      </div>
        </section>
    )
}
export default Hero
