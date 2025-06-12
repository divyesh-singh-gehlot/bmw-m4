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
      .to(sceneRef.current, { opacity: 0, x: '-25vw', y: '160vh', ease: 'none' }, "fadeOut1")

      .addLabel("hiddenTravel")
      .to(sceneRef.current, { opacity: 0, x: '0vw', y: '400vh', ease: 'none' }, "hiddenTravel")

      .addLabel("reenter")
      .to(sceneRef.current, { opacity: 0, x: '-30vw', y: '480vh', ease: 'none' }, "reenter")

      .addLabel("turn")
      .to(sceneRef.current, { opacity: 1, x: '60vw', y: '620vh', ease: 'none' }, "turn")
      .to(sceneRef.current, { x: '-35vw', y: '690vh', ease: 'none' }, "turn+=0.3")

      .addLabel("finalZigZag")
      .to(sceneRef.current, { x: '60vw', y: '830vh', ease: 'none' }, "finalZigZag")
      .to(sceneRef.current, { x: '-10vw', y: '900vh', ease: 'none' }, "finalZigZag+=0.3");

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
        <div className='flex gap-5 pt-36 '>
          <div className='w-[40%] flex flex-col gap-5'>
            <h1 className='text-white font-extrabold text-3xl font-antonio'>MOTOR RACING TECHNOLOGY.</h1>
            <p className='text-white text-lg font-sans'>The straight six-cylinder engine featuring M TwinPower Turbo Technology, available in three performance levels, features superior power delivery and the striking characteristic M engine sound. Two mono-scroll turbochargers, direct High-Precision Injection, fully variable valve control and variable camshaft control ensure outstanding performance at any time. The BMW M4 Competition Coupé with M xDrive accelerates from 0 to 100 km/h in just 3.5 seconds and from 0 to 200 km/h in just 11.8 seconds – a new benchmark.</p>
          </div>
          <div className='w-1/2 absolute right-10'>
            <img src={engImg} alt="engine-image" className='rounded-4xl' />
          </div>
        </div>
      </section>
      <section className='h-[120vh] w-full bg-black'>
        <div className="w-[60%] mx-auto text-white font-sans mb-20">
          <h2 className="text-xl font-bold mb-8">TECHNICAL DETAILS:</h2>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">Adaptive M suspension.</h3>
            <p className="text-sm text-gray-300">
              Excellent dynamics, exceptional roadholding and improved comfort on long journeys:
              The Adaptive M suspension makes it possible to adjust the damper characteristics to suit any given driving situation, increasing driving dynamics and comfort. In addition to the standard COMFORT setting for increased driving comfort, the SPORT programme offers firmer damper settings, and with SPORT+, the vehicle can be used on the race track.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">M Carbon ceramic brake.</h3>
            <p className="text-sm text-gray-300">
              Direct application of force, reduced wear, and corrosion-free: The optional M Carbon ceramic brake delivers braking power more directly. In addition, it contributes to a lower vehicle weight, which has a positive impact on agility, dynamics and acceleration. The technical equipment is visible through carbon-ceramic brake discs and calipers in the colour Gold matt with M lettering on the front and rear axle on the outside.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">BMW M xDrive.</h3>
            <p className="text-sm text-gray-300">
              BMW M xDrive with Active M Differential of the BMW M4 Competition with M xDrive, guarantees maximum traction and driving dynamics for everyday driving, as well as at the racetrack. The M specific technology combines the typical agility of a rear-wheel drive with the control of an all-wheel drive. You can choose between the drive variants 4WD, 4WD Sport and – in DSC-off mode – 2WD.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">8-speed M Steptronic sport transmission.</h3>
            <p className="text-sm text-gray-300">
              The 8-speed M Steptronic sport transmission with Drivelogic of the BMW M4 Competition model variants offers numerous shifting options: extremely dynamic, particularly comfortable and smooth as well as fuel-saving. You can shift manually using the gear lever or the gearshift paddles on the steering wheel, or select one of three automatic programmes using Drivelogic.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">M specific braking system.</h3>
            <p className="text-sm text-gray-300">
              In addition to saving approximately two kilograms in weight, the integrated M specific braking system provides very high braking dynamics. For a maximum level of individualisation, the driver can choose between "Comfort" and "Sport" brake pedal settings according to the situation. Depending on the parameters, the response behavior is designed differently. In "Sport" mode, deceleration is higher with the same distance of pedal travel particularly at low speeds while the response of the two parameter settings is similar at high speeds.
            </p>
          </div>
        </div>

      </section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='w-[40%] flex flex-col gap-5 absolute right-10 pt-56'>
          <h1 className='text-black font-extrabold text-3xl font-antonio'>M DESIGN GRAPHICS.</h1>
          <p className='text-black text-lg font-sans'>A special feature for all model variants of the BMW M4 Coupé: optional M design graphics for the bonnet and the rear lid. This contrasting colour emphasises the sporting characteristics of the two-door model and is available either in High Gloss Black or High Gloss Red. The optional steel roof available at no extra cost, which includes an electrically operated glass sliding roof, offers an additional design accent: The sheet metal part of the roof is finished in high gloss black instead of the body colour.</p>
          <a href="https://www.bmw-m.com/en/topics/magazine-article-pool/m-design-graphic.html" target='_blank'>- Experience more -</a>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='w-[40%] flex flex-col gap-5 pl-10 pt-56'>
          <h1 className='text-black font-extrabold text-3xl font-antonio'>BMW INDIVIDUAL.</h1>
          <p className='text-black text-lg font-sans'>Express your personality with BMW Individual: high-quality leather upholstery and impressive special paint finishes are available for all BMW M4 models and represent the most exclusive form of dynamic driving pleasure. With over 150 fascinating BMW Individual paint finishes, you can give free rein to your creativity.</p>
          <a href="https://individual.bmw-m.com/G82-21HK-A30">Start BMW Individual Visualizer</a>
        </div>
      </section>
      <section className='h-[100vh] w-full bg-[url("./assets/images/about-bg.jpg")] bg-cover'>
        <div className='flex justify-center place-items-end flex-col w-[100%] h-[100vh] px-48 gap-10 relative z-10'>
          <h1 className='text-black font-extrabold text-3xl font-antonio'>THE M4</h1>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-[#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200 w-72">
            <a href="https://www.bmw.in/en/all-models/m-series/bmw-4-series-m-models/bmw-m4-coupe.html" target='_blank'>Build & Price</a>
          </button>
        </div>
      </section>
      <section className='h-[20vh] w-full bg-black'>
        <div class="bg-black text-white flex items-center justify-center h-[20vh]">
          <div class="text-center">
            <p class="text-xl font-semibold">BMW M4 — Unleash the Beast</p>
            <p class="text-sm mt-2">Built with passion by DIVYESH SINGH GEHLOT</p>
          </div>
        </div>

      </section>
    </main>
  )
}

export default App
