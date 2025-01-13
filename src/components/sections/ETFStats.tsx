import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ETFStats: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null); // Changed from HTMLElement to HTMLDivElement

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (container) {
            gsap.fromTo(container,
                {
                    clipPath: "inset(0 50% 0 0)"
                },
                {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
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
        <section className='lg:py-100 md:py-70 py-50 relative lg:px-0 px-4'>
            <div
                ref={containerRef}
                className="container relative bg-graphbg bg-contain bg-no-repeat bg-right-bottom "
            >
                <div className='flex flex-col text-white md:mb-0 lg:py-100 md:py-70 py-50 md:pb-0 pb-40'>
                    <h3 className='md:w-full w-11/12'>El interés por los ETFs se dispara</h3>
                    <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl'>187%</h1>
                    <h4 className='text-secondary'>Crecimiento YTD del</h4>
                </div>
            </div>
        </section>
    )
}

export default ETFStats