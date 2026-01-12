import React, { useEffect, useRef, useCallback } from 'react';

export function Hero() {
  const characterRef = useRef(null);
  const communityRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Parallax for character
      if (characterRef.current) {
        const moveX = (clientX - centerX) / 50;
        const moveY = (clientY - centerY) / 50;
        characterRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      // Parallax for community element
      if (communityRef.current) {
        const moveX = (clientX - centerX) / -40;
        const moveY = (clientY - centerY) / -40;
        communityRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      // Magnetic button effect
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        const dist = Math.hypot(clientX - btnCenterX, clientY - btnCenterY);

        if (dist < 150) {
          const magneticX = (clientX - btnCenterX) * 0.3;
          const magneticY = (clientY - btnCenterY) * 0.3;
          btnRef.current.style.transform = `translate(${magneticX}px, ${magneticY}px)`;
        } else {
          btnRef.current.style.transform = 'translate(0px, 0px)';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBtnMouseLeave = useCallback(() => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0, 0)';
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full bg-black relative overflow-hidden p-0 flex items-center justify-center"
    >
      <div className="w-full max-w-[1600px] h-screen relative flex items-center justify-center px-4 md:px-0">
        {/* Layer 1: Character (Left) - Hidden on mobile */}
        <div className="hidden md:flex absolute w-full h-full top-0 left-0 pointer-events-none items-center justify-start pl-[5%] z-[5]">
          <img 
            ref={characterRef}
            src="/images/character.png" 
            alt="Jesse Skeleton" 
            className="h-[85vh] w-auto object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Layer 2: Community Element (Right) - Hidden on mobile */}
        <div className="hidden md:flex absolute w-full h-full top-0 left-0 pointer-events-none items-end justify-end pb-[5vh] z-[6]">
          <img 
            ref={communityRef}
            src="/images/hero-community-build.png" 
            alt="Community Builder" 
            className="h-[60vh] w-auto object-contain drop-shadow-[0_0_30px_rgba(29,161,242,0.4)] -mr-[3%]"
          />
        </div>

        {/* Layer 3: Text & CTA (Center) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-2">
            <p className="text-[#1DA1F2] text-base md:text-2xl font-extrabold tracking-[0.2em] md:tracking-[0.3em] m-0 drop-shadow-[0_0_15px_rgba(29,161,242,0.4)]">
              LIVING AND BREATHING
            </p>
            <p 
              className="text-[#1DA1F2] text-[2.5rem] md:text-[5rem] font-black -mt-2 md:-mt-4 drop-shadow-[0_0_25px_rgba(29,161,242,0.4)] tracking-wider"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              WEB3
            </p>
          </div>

          <h1 
            className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-black text-white leading-[0.9] my-2 md:my-4 mb-4 md:mb-8 tracking-[-2px] md:tracking-[-4px] uppercase"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            JESSE CRYPT
          </h1>

          <div className="text-[#B0B0B0] text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-16">
            <p className="my-1">COMMUNITY BUILDER • CONTENT WRITER</p>
            <p className="my-1">CONTRIBUTOR • WEDS INTERN</p>
          </div>

          <div>
            <a 
              ref={btnRef}
              href="#projects" 
              onMouseLeave={handleBtnMouseLeave}
              className="inline-block py-4 px-8 md:py-5 md:px-16 border-2 md:border-[3px] border-[#1DA1F2] text-[#1DA1F2] no-underline text-sm md:text-lg font-extrabold tracking-[0.15em] md:tracking-[0.2em] transition-all duration-[400ms] bg-[rgba(29,161,242,0.05)] hover:bg-[#1DA1F2] hover:text-black hover:shadow-[0_0_50px_rgba(29,161,242,0.4)] hover:-translate-y-[5px]"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              EXPLORE MY WORK
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-[0.6rem] tracking-[0.3em] font-bold">SCROLL</span>
            <div className="w-px h-8 bg-white/50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
