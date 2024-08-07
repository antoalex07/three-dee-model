import React, { useState, useEffect, useRef } from 'react';

const Image2Video = ({ totalImages = 250, intervalTime = 100 }) => {
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      }, intervalTime);
  
      return () => clearInterval(interval);
  }, [totalImages, intervalTime]);

  const getImagePath = (index) => `./img/${index.toString().padStart(4, "0")}.png`;

  return (
    <div 
        ref={imageRef} 
        className='img-container'>
      <img 
        src={getImagePath(currentIndex)} 
        alt="360 view"  />
    </div>  
    )
}

export default Image2Video