import React, { useEffect, useRef } from 'react'

const AlphaStats: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                sectionRef.current?.classList.add('bg-animate')
            }
        }, { threshold: 0.1 })

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className='lg:py-100 md:py-70 md:pt-0 pt-100 md:pb-0 pb-50 relative md:bg-ballbg bg-ballbgmobile bg-cover bg-center after:absolute after:content-[""] after:bg-gradient-to-t after:from-white after:to-transparent after:w-[90%] after:h-[90%] after:bottom-0 after:left-0 after:blur-[50px] after:z-[-1] bg-no-repeat overflow-hidden before:absolute before:content-[""] 
            before:inset-0 
            before:bg-[url("../images/index/ball.png")] 
            before:bg-no-repeat
            before:z-0'
        >
            <div className="container">
                <div className="flex flex-col md:gap-10 gap-20">
                    <div className='flex flex-col text-white md:pb-0 pb-5'>
                        <h3 className='xl:w-full lg:w-3/5 md:w-1/2'>Récord en Finect Alpha con más de</h3>
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