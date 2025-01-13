import React, { useEffect, useRef } from 'react'
import videoStatsGraph from "../../assets/images/index/Charts.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const VideoStats: React.FC = () => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const image = imageRef.current;
        if (image) {
            gsap.fromTo(image,
                {
                    y: 200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top bottom",
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
        <section className='lg:py-100 md:py-70 py-50 md:pt-0 pt-100 relative bg-cover bg-no-repeat bg-center after:absolute after:content-[""] after:bg-secondary after:opacity-10 after:blur-[50px] after:w-full after:h-1/3 after:bg-contain after:bg-top after:bg-no-repeat after:top-0 after:left-0 after:z-[10]'>
            <div className="container">
                <div className="flex flex-col text-center text-white items-center">
                    <h1 className='xl:text-[300px] lg:text-[220px] md:text-[180px] leading-none w-min float-right sm:text-9xl text-8xl'>+100K</h1>
                    <h3 className='float-right xl:mr-6 lg:mr-8'>visualizaciones de vídeos <span className='text-secondary'>al mes</span></h3>
                </div>
            </div>
            <figure>
                <img
                    ref={imageRef}
                    src={videoStatsGraph}
                    alt="graph"
                    className='w-full h-full md:min-h-full min-h-[50vh] md:mt-0 mt-3'
                />
            </figure>
        </section>
    )
}

export default VideoStats