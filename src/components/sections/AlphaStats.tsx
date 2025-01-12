import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AlphaStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (section) {
            gsap.fromTo(section,
                {
                    backgroundPositionX: "100%",
                },
                {
                    duration: 1.5,
                    ease: "power2.out",
                    backgroundPositionX: "80%",
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className='lg:py-100 md:py-70 py-100 relative md:bg-ballbg bg-ballbgmobile bg-cover bg-center after:absolute after:content-[""] after:bg-gradient-to-t after:from-white after:to-transparent after:w-full after:h-full after:bottom-0 after:left-0 after:blur-[50px] after:z-[-1] bg-no-repeat overflow-hidden'
        >
            <div className="container">
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col text-white md:pb-0 pb-5'>
                        <h3 className='md:w-full w-4/5'>Récord en Finect Alpha con más de</h3>
                        <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl'>77K</h1>
                        <h3 className='text-secondary'>Escuchas anuales</h3>
                    </div>
                    <div className='flex flex-col text-white justify-end items-end w-full'>
                        <h3 className='text-secondary text-end'>Crecimiento YTD del</h3>
                        <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl text-end'>175%</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AlphaStats