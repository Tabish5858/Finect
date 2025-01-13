import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ETFStats: React.FC = () => {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const bg = bgRef.current;
        if (bg) {
            gsap.fromTo(bg,
                {
                    opacity: 0,
                    clipPath: "inset(0 50% 0 0)"
                },
                {
                    opacity: 1,
                    clipPath: "inset(0 0% 0 0)",
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bg,
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
            <div className="container relative">
                {/* Background div with animation */}
                <div
                    ref={bgRef}
                    className="absolute inset-0 bg-graphbg bg-contain bg-no-repeat bg-right-bottom z-0"
                />

                {/* Content div without animation */}
                <div className='relative z-10 flex flex-col text-white md:mb-0 lg:pb-32 md:pb-24 py-50 pb-44'>
                    <h3 className='md:w-full w-11/12'>El interés por los ETFs se dispara:</h3>
                    <h3 className='text-secondary'>crecimiento del</h3>
                    <div className='flex md:items-end md:flex-row flex-col lg:gap-2'>
                        <h1 className='xl:text-[250px] lg:text-[200px] md:text-[150px] leading-none w-min float-right sm:text-9xl text-8xl'>187% </h1>
                        <h2 className='lg:text-7xl text- md:mb-7 text-secondary'>YTD</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ETFStats