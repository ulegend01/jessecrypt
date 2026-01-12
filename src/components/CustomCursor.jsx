import React, { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posRef.current.x += (mouseX - posRef.current.x) * 0.15;
      posRef.current.y += (mouseY - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${posRef.current.x - 20}px, ${posRef.current.y - 20}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="cursor" />
      <div ref={followerRef} id="cursor-follower" />
    </>
  );
}
