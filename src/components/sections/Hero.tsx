import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../../assets/images/index/heroLogo.svg';

const Hero: React.FC = () => {
  const yearRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.set([yearRef.current, subtitleRef.current, logoRef.current], {
      y: 100,
      opacity: 0,
    })
      .to([yearRef.current, subtitleRef.current, logoRef.current], {
        duration: 4,
        y: 0,
        opacity: 1,
        stagger: 0
      });

  }, []);

  return (
    <section className="min-h-screen flex lg:pb-100 md:pb-70 pb-50 lg:pt-36 md:pt-28 pt-70 bg-hero relative">
      <div className="container flex flex-col flex-grow">
        <div className="flex md:justify-between justify-center lg:gap-8 md:gap-5 gap-4 flex-grow md:flex-row flex-col items-center">
          {/* Logo */}
          <div className="md:w-2/5 overflow-hidden h-max">
            <figure className="flex flex-col flex-grow justify-center items-center h-max "
              ref={logoRef}
            >
              <img
                src={logo}
                alt="logo"
                className="h-full md:w-full w-[262px] object-contain"
              />
            </figure>
          </div>

          {/* Divider (No animation) */}
          <div
            ref={dividerRef}
            className="bg-borderColor-border2 md:w-[2px] w-full md:h-full h-1 md:block hidden max-h-[185px]"
          />

          {/* Text */}
          <div className="md:w-2/5 h-max">
            <div className="flex flex-col text-center justify-center h-max overflow-hidden md:gap-0 gap-4">
              <div className="overflow-hidden">
                <h1 ref={yearRef} className="gradient-text md:text-9xl text-[116px] lead transform-gpu leading-none">
                  2024
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 ref={subtitleRef} className="gradient-text transform-gpu lg:text-[50px] md:text-[48px] text-[50px]">
                  En Números
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;