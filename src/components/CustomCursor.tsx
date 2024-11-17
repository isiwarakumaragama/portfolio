import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor hidden md:block fixed pointer-events-none z-[9999] transition-all duration-100"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          width: '12px',
          height: '12px',
          backgroundColor: '#36BCF7',
          borderRadius: '50%',
          boxShadow: '0 0 20px #36BCF7',
        }}
      />
      <div
        className="custom-cursor-trail hidden md:block fixed pointer-events-none z-[9998]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 1.2 : 1})`,
          width: '36px',
          height: '36px',
          border: '1px solid #36BCF7',
          borderRadius: '50%',
          transition: 'transform 0.15s ease-out, width 0.3s ease, height 0.3s ease',
          opacity: isClicking ? 0.8 : 0.5,
        }}
      />
    </>
  );
}