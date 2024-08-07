import React, { useState, useEffect, useRef } from 'react';

const Image360Viewer = ({ totalImages = 250 }) => {
  
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { width, left } = imageRef.current.getBoundingClientRect();
      const x = event.clientX - left;
      
      let newIndex = totalImages - 1 - Math.floor((x / width) * totalImages);
      
      newIndex = Math.max(1, Math.min(newIndex, totalImages - 1));
      
      setCurrentIndex(newIndex);
    };

    const imgElement = imageRef.current;
    imgElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      imgElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, [totalImages]);

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

export default Image360Viewer