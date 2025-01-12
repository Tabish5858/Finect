import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import diamondCircleImg from "../../assets/images/index/diamondCircle.png"

const ProductStats: React.FC = () => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const image = imageRef.current;
        if (image) {
            gsap.fromTo(image,
                {
                    rotation: 45
                },
                {
                    rotation: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
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
        <section className='lg:py-100 md:py-70 py-50 relative'>
            <div className="container">
                <div className="flex md:flex-row flex-col text-white lg:gap-5 gap-3">
                    <div className="md:w-2/5">
                        <figure>
                            <img 
                                ref={imageRef}
                                src={diamondCircleImg} 
                                alt="diamondCircleImg" 
                                className='w-full'
                            />
                        </figure>
                    </div>
                    <div className="md:w-3/5">
                        <div className='flex flex-col h-full justify-end md:text-start text-center'>
                            <h3>Más de</h3>
                            <h1 className='xl:text-[280px] lg:text-[200px] md:text-[150px] text-[100px] leading-none md:w-min md:float-left sm:text-8xl text-7xl'>3.000</h1>
                            <h3>Comparaciones de productos de inversión <span className='text-secondary'>al día</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductStats