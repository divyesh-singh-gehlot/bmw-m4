import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scene from './Scene/Scene'
import logo from './assets/Images/Logo/logo.png'
import UntamedDynamics from './Sections/UntamedDynamics'
import HeroScrollSection from './Sections/HeroScrollSection'
import engImg from './assets/Images/Engine Details/img.avif'




gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Register main scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        }
      }
    });

    // Define scroll-based keyframes
    tl.addLabel("intro")
      .to(sceneRef.current, { x: '25vw', y: '100vh', ease: 'none' }, "intro")

      .addLabel("fadeOut1")
      .to(sceneRef.current, { opacity: 0, x: '25vw', y: '160vh', ease: 'none' }, "fadeOut1")

      .addLabel("hiddenTravel")
      .to(sceneRef.current, { opacity: 0, x: '0vw', y: '400vh', ease: 'none' }, "hiddenTravel")

      .addLabel("reenter")
      .to(sceneRef.current, { opacity: 0, x: '-30vw', y: '480vh', ease: 'none' }, "reenter")

      .addLabel("turn")
      .to(sceneRef.current, { opacity: 1,  x: '60vw', y: '620vh', ease: 'none' }, "turn")
      .to(sceneRef.current, { x: '-35vw', y: '690vh', ease: 'none' }, "turn+=0.3")

      .addLabel("finalZigZag")
      .to(sceneRef.current, { x: '80vw', y: '810vh', ease: 'none' }, "finalZigZag")
      .to(sceneRef.current, { x: '-10vw', y: '880vh', ease: 'none' }, "finalZigZag+=0.3");

    // Optional cleanup
    return () => {
      tl.kill();
    };
  }, []);


  return (
    <main ref={mainRef} className='bg-black text-white tracking-wider font-sans'>
      <section className='h-[100vh] w-full bg-[url("./assets/images/bg.jpg")] bg-cover'>
        <div className='flex h-fit w-fit p-5 z-0'>
          <img src={logo} alt="logo" className='h-24 w-24' />
        </div>
        <div ref={sceneRef} className="absolute top-50 left-0 w-full h-[100vh]"
          style={{ willChange: 'transform', pointerEvents: 'none' }}>
          <Canvas shadows>
            <Scene progress={progress} />
          </Canvas>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='flex justify-center flex-col w-[40%] h-[100vh] px-10 gap-5'>
          <h1 className='text-black font-extrabold text-3xl font-antonio'>THE M4</h1>
          <p className='text-black text-lg font-sans'>The rebel among high-performance sports coupés: BMW M4 Coupé and M4 Competition Coupé offer M typical driving dynamics at the very highest level. Equipped with the 510 hp M TwinPower Turbo inline 6-cylinder petrol engine and numerous drivetrain and suspension technologies adapted from motorsport, it lets nothing stand in the way of the ultimate driving experience. The optional M xDrive all-wheel drive system with Active M Differential guarantees maximum traction in everyday driving as well as on the racetrack. The vehicle's athletic character is underlined by the powerful new design language of BMW M.</p>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-[#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 w-72">
            <a href="https://www.bmw.in/en/all-models/m-series/bmw-4-series-m-models/bmw-m4-coupe.html" target='_blank'>Build & Price</a>
          </button>
        </div></section>
      <section className='h-[160vh] w-full bg-black'>
        <UntamedDynamics />
      </section>
      <section className='h-fit w-full'>
        <HeroScrollSection />
      </section>
      <section className='h-[100vh] w-full bg-black'>
        <div className='flex gap-5 py-36 '>
        <div className='w-[40%] flex flex-col gap-5'>
          <h1 className='text-white font-extrabold text-3xl font-antonio'>MOTOR RACING TECHNOLOGY.</h1>
          <p className='text-white text-lg font-sans'>The straight six-cylinder engine featuring M TwinPower Turbo Technology, available in three performance levels, features superior power delivery and the striking characteristic M engine sound. Two mono-scroll turbochargers, direct High-Precision Injection, fully variable valve control and variable camshaft control ensure outstanding performance at any time. The BMW M4 Competition Coupé with M xDrive accelerates from 0 to 100 km/h in just 3.5 seconds and from 0 to 200 km/h in just 11.8 seconds – a new benchmark.</p>
        </div>
        <div className='w-1/2 absolute right-10'>
          <img src={engImg} alt="engine-image" className='rounded-4xl'/>
        </div>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-black'>Technical Details</section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>More Details 1</section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>More Details 2</section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='flex justify-center place-items-end flex-col w-[100%] h-[100vh] px-48 gap-10 relative z-10'>
          <h1 className='text-black font-extrabold text-3xl font-antonio'>THE M4</h1>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-[#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 w-72">
            <a href="https://www.bmw.in/en/all-models/m-series/bmw-4-series-m-models/bmw-m4-coupe.html" target='_blank'>Build & Price</a>
          </button>
        </div>
      </section>
      <section className='h-[20vh] w-full bg-black'>Footer</section>
    </main>
  )
}

export default App
