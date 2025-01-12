import React, { useEffect, useRef } from 'react'

const Stats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            },
            { threshold: 0.2 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className='lg:pt-56 lg:pb-100 md:py-48 py-50 relative bg-ribbion'>
            <div className="container">
                <div className="flex md:flex-row flex-col text-center">
                    <div className="md:w-1/2">
                        <h4 className='text-primary text-start'>Más de <span className='text-secondary'>5 millones</span> de usuarios recurrieron a Finect en busca de información, análisis y
                            herramientas para invertir mejor</h4>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative text-primary lg:mt-10 md:mt-5 mt-10 flex flex-col items-end">
                            <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right text-[150px]'>+5M</h1>
                            <h4 className='float-right xl:mr-6 lg:mr-8'>Usuarios activos <span className='text-secondary'>en 2024</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats