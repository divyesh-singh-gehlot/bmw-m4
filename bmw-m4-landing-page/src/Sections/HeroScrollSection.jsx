import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '/Text-Scroll/img.avif';

gsap.registerPlugin(ScrollTrigger);

const HeroScrollSection = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { scale: 1, y: 0 },
                {
                    scale: 2.5,
                    y: -100,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 10%',
                        end: '+=250vh',
                        scrub: 0.8,
                        pin: true,
                        anticipatePin: 1,
                    },
                    ease: 'power1.inOut',
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="h-[100vh] w-full overflow-hidden relative bg-black flex items-center justify-center"
        >
            <img
                ref={imageRef}
                src={img}
                alt="Scroll Hero"
                className="w-[45vw] rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] opacity-90 object-cover transition-all duration-300"
            />

            <h1 className="absolute text-white text-6xl md:text-8xl font-extrabold tracking-widest pointer-events-none drop-shadow-[0_2px_20px_rgba(255,255,255,0.8)]">
                POWER. INDUCED.
            </h1>

        </section>
    );
};

export default HeroScrollSection;
