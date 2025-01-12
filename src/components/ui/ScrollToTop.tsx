import React, { useEffect, useState, useRef } from "react";
import { RiArrowUpLine } from "@remixicon/react";

const ScrollToTop:React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveOffset = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollPercent = Math.min((scrollPosition / documentHeight) * 100, 100);
      setScrollPercent(scrollPercent);

      if (scrollPosition >= 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const size = 50;
        canvas.width = size;
        canvas.height = size;

        const drawWave = () => {
          ctx.clearRect(0, 0, size, size);

          
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
          ctx.fillStyle = "#00eeff41"; 
          ctx.fill();

          
          const waveHeight = (size * scrollPercent) / 100;
          const waveFrequency = 0.05; 
          const waveAmplitude = 1; 

          ctx.beginPath();
          ctx.moveTo(0, size - waveHeight);
          for (let x = 0; x <= size; x++) {
            const y = size - waveHeight + waveAmplitude * Math.sin((x + waveOffset.current) * waveFrequency);
            ctx.lineTo(x, y);
          }
          ctx.lineTo(size, size);
          ctx.lineTo(0, size);
          ctx.closePath();
          ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor'); 
          ctx.fill();

          waveOffset.current += 0.01; 
          requestAnimationFrame(drawWave);
        };

        drawWave();
      }
    }
  }, [scrollPercent]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed lg:bottom-7 bottom-4 lg:right-7 right-4 border-none rounded-full p-4 cursor-pointer duration-500 ease-in-out transform hover:-translate-y-1/4 transition-all md:scale-100 scale-75 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ backgroundColor: "#00eeff41" }} 
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-full" />
      <RiArrowUpLine size={25} className="relative z-10 text-white" />
    </button>
  );
};

export default ScrollToTop;