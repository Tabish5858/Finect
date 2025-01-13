import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const FinancialAdvice: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (section) {
            gsap.fromTo(section,
                {
                    backgroundPosition: "80% 80%",
                },
                {
                    backgroundPosition: "100% 100%",
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
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
            className='lg:py-100 md:py-70 py-50 relative bg-dotted_bg bg-[length:120%] bg-no-repeat after:absolute after:content-[""] after:bg-secondary after:opacity-10 after:blur-[50px] after:w-full after:h-1/2 after:bg-contain after:bg-top after:bg-no-repeat after:top-0 after:left-0 after:z-[10]'
        >
            <div className="container">
                <div className="flex flex-col text-center text-white items-end md:mt-0 mt-16">
                    <h1 className='text-right lg:text-[300px] md:text-[200px] sm:text-[120px] text-[100px] leading-none'>+2.000</h1>
                    <h4 className='text-right lg:w-1/2 md:w-2/3'>Usuarios han solicitado los servicios de asesoramiento financiero</h4>
                </div>
            </div>
        </section>
    )
}

export default FinancialAdvice