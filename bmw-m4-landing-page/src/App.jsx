import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene from './Scene/Scene'
import logo from './assets/Images/Logo/logo.png'
import UntamedDynamics from './Sections/UntamedDynamics'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        }
      }
    }).to(sceneRef.current, {
      ease: 'none',
      x: '25vw',
      y: '90vh',
    }).to(sceneRef.current, {
      ease: 'none',
      opacity: 0,
      x: '25vw',
      y: '90vh',
    }).to(sceneRef.current, {
      ease: 'none',
      opacity: 0,
      x: '25',
      y: '440vh',
    }).to(sceneRef.current, {
      ease: 'none',
      opacity: 1,
      x: '-35vw',
      y: '440vh',
    }).to(sceneRef.current, {
      ease: 'none',
      x: '30vw',
      y: '540vh',
    }).to(sceneRef.current, {
      ease: 'none',
      x: '-35vw',
      y: '640vh',
    }).to(sceneRef.current, {
      ease: 'none',
      x: '35vw',
      y: '760vh',
    }).to(sceneRef.current, {
      ease: 'none',
      x: '-20vw',
      y: '890vh',
    })

  }, [])


  return (
    <main ref={mainRef} className='text-white tracking-wider font-sans'>
      <section className='h-[100vh] w-full bg-[url("./assets/images/bg.jpg")] bg-cover'>
        <div className='flex h-fit w-fit p-5'>
          <img src={logo} alt="logo" className='h-24 w-24' />
        </div>
        <div ref={sceneRef} className="absolute top-50 left-0 w-full h-[100vh]"
          style={{ willChange: 'transform' }}>
          <Canvas shadows>
            <Scene progress={progress} />
          </Canvas>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='flex justify-center flex-col w-[40%] h-[100vh] px-10 gap-5'>
          <h1 className='text-black font-extrabold text-3xl ' style={{ fontFamily: 'antonio' }}>MOTOR RACING TECHNOLOGY.</h1>
          <p className='text-black text-lg'>The straight six-cylinder engine featuring M TwinPower Turbo Technology, available in three performance levels, features superior power delivery and the striking characteristic M engine sound. Two mono-scroll turbochargers, direct High-Precision Injection, fully variable valve control and variable camshaft control ensure outstanding performance at any time. The BMW M4 Competition Coupé with M xDrive accelerates from 0 to 100 km/h in just 3.5 seconds and from 0 to 200 km/h in just 11.8 seconds – a new benchmark.</p>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-[#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 w-72">
            <a href="https://www.bmw.in/en/all-models/m-series/bmw-4-series-m-models/bmw-m4-coupe.html" target='_blank'>Build & Price</a>
          </button>
        </div></section>
      <section className='h-[160vh] w-full bg-black'>
        <UntamedDynamics />
      </section>
      <section className='h-[100vh] w-full bg-black'>Text-Cover-Animation</section>
      <section className='h-[100vh] w-full bg-black'>Engine Details</section>
      <section className='h-[100vh] w-full bg-black'>Technical Details</section>
      <section className='h-[100vh] w-full bg-black'>More Details 1</section>
      <section className='h-[100vh] w-full bg-black'>More Details 2</section>
      <section className='h-[100vh] w-full bg-black'>More Details 3</section>
      <section className='h-[40vh] w-full bg-black'>Footer</section>
    </main>
  )
}

export default App
