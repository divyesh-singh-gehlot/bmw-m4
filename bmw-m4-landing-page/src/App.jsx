import React, { useRef , useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene from './Scene/Scene'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger:{
        trigger:mainRef.current,
        start:"top top",
        end:"bottom bottom",
        scrub:1,
        onUpdate:(self)=>{
          setProgress(self.progress)
        }
      }
    }).to(sceneRef.current,{
      ease:'none',
      x:'25vw',
      y:'110vh',
    }).to(sceneRef.current,{
      ease:'none',
      opacity:0,
      x:'-25vw',
      y:'140vh',
    }).to(sceneRef.current,{
      ease:'none',
      opacity:0,
      x:'-30vw',
      y:'380vh',
    }).to(sceneRef.current,{
      ease:'none',
      opacity:1,
      x:'-25vw',
      y:'435vh',
    }).to(sceneRef.current,{
      ease:'none',
      x:'30vw',
      y:'520vh',
    }).to(sceneRef.current,{
      ease:'none',
      x:'-25vw',
      y:'630vh',
    }).to(sceneRef.current,{
      ease:'none',
      x:'25vw',
      y:'730vh',
    }).to(sceneRef.current,{
      ease:'none',
      x:'-25vw',
      y:'830vh',
    })
    
  }, [])
  

  return (
    <main ref={mainRef} className='bg-black text-white'>
      <section className='h-[100vh] w-full'>
        <div ref={sceneRef} className='h-[100vh] w-full'>
          <Canvas>
          <Scene progress={progress} />
        </Canvas>
        </div>
      </section>
      <section className='h-[100vh] w-full'>About</section>
      <section className='h-[100vh] w-full'>Untamed Dynamics</section>
      <section className='h-[100vh] w-full'>Text-Cover-Animation</section>
      <section className='h-[100vh] w-full'>Engine Details</section>
      <section className='h-[100vh] w-full'>Technical Details</section>
      <section className='h-[100vh] w-full'>More Details 1</section>
      <section className='h-[100vh] w-full'>More Details 2</section>
      <section className='h-[100vh] w-full'>More Details 3</section>
      <section className='h-[40vh] w-full'>Footer</section>
    </main>
  )
}

export default App
