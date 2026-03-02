import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Mouse ki position update karne ke liye
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check karne ke liye ke mouse kisi clickable cheez par hai ya nahi
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div 
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
};

export default CustomCursor;