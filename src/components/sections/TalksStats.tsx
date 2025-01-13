import React, { useEffect, useRef } from 'react'

const TalksStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                } else {
                    entry.target.classList.remove('animate');
                }
            },
            {
                rootMargin: '200px 0px 0px 0px',
                threshold: 0
            }
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
        <div className='relative md:pt-100 before:absolute before:content-[""] before:top-[-20%] before:left-0 before:w-full before:h-[40%] before:bg-[#5a60ca] before:blur-[50px] before:opacity-50 before:-z-100'>
            <section
                ref={sectionRef}
                className='lg:pt-100 lg:pb-72 md:py-70 py-50 relative bg-ribbion2 z-100 overflow-visible '
            >
                <div className="container md:pt-100">
                    <div className="flex flex-col text-white lg:pt-100 md:pt-70 pt-100">
                        <h3 className='md:w-full w-4/5'>Récord en Finect Talks con más de</h3>
                        <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl'>395K</h1>
                        <h3 className='text-secondary'>Escuchas anuales</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TalksStats