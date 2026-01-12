import React, { useEffect, useRef } from 'react';

export function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 md:py-32 px-4 md:px-[5%] border-t border-white/5 opacity-0 translate-y-[50px] transition-all duration-1000 ease-out"
    >
      <div className="max-w-[900px] mx-auto">
        {/* Main Contact Frame */}
        <div className="border-2 border-white/10 p-10 md:p-16 text-center hover:border-[#1DA1F2]/20 transition-all duration-500">
          
          {/* Section Label */}
          <div 
            className="text-[#1DA1F2] text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] mb-4"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            CONTACT
          </div>
          
          <h2 
            className="text-2xl md:text-[3rem] font-black mb-6 md:mb-8 tracking-[-1px]"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            ESTABLISH LINK
          </h2>
          
          <p className="text-base md:text-lg mb-10 md:mb-12 text-[#B0B0B0] max-w-[500px] mx-auto">
            Ready to scale your ecosystem? Let's connect and build something remarkable together.
          </p>
          
          {/* CTA Button */}
          <a 
            href="mailto:Jesseessej049@gmail.com" 
            className="inline-block py-4 px-10 md:py-5 md:px-14 border-2 border-[#1DA1F2] text-[#1DA1F2] no-underline text-sm md:text-base font-bold tracking-[0.15em] md:tracking-[0.2em] transition-all duration-300 hover:bg-[#1DA1F2] hover:text-black"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            TRANSMIT EMAIL
          </a>
          
          {/* Divider */}
          <div className="w-16 h-px bg-white/10 mx-auto my-10 md:my-12"></div>
          
          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            <a 
              href="https://x.com/0xjkrpts" 
              className="text-white/40 no-underline text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:text-[#1DA1F2] flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-[#1DA1F2] rounded-full"></span>
              X / TWITTER
            </a>
            <a 
              href="https://github.com/jesse353" 
              className="text-white/40 no-underline text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:text-[#1DA1F2] flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-[#1DA1F2] rounded-full"></span>
              GITHUB
            </a>
            <a 
              href="https://www.linkedin.com/in/jesse-essej-764b28315" 
              className="text-white/40 no-underline text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:text-[#1DA1F2] flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-[#1DA1F2] rounded-full"></span>
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
