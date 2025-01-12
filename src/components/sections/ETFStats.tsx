import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ETFStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (section) {
            gsap.fromTo(section,
                {
                    clipPath: "inset(0 50% 0 0)"
                },
                {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.5,
                    ease: "power2.out",
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
            className='lg:py-100 md:py-70 py-50 relative bg-graphbg md:bg-contain bg-cover bg-no-repeat bg-right-bottom'
        >
            <div className="container">
                <div className='flex flex-col text-white md:mb-0 mb-14'>
                    <h3 className='md:w-full w-4/5'>El interés por los ETFs se dispara</h3>
                    <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl'>187%</h1>
                    <h3 className='text-secondary'>Crecimiento YTD del</h3>
                </div>
            </div>
        </section>
    )
}

export default ETFStats