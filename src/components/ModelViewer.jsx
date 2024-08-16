import React, { useState, useEffect, useRef } from 'react';

const ModelViewer = ({ totalImages = 250 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const { left } = imageRef.current.getBoundingClientRect();
        const x = event.clientX - left;
        const deltaX = dragStartX - x;

        let newIndex = currentIndex + Math.floor((deltaX / 5));

        if (newIndex < 1) {
          newIndex = totalImages;
        } else if (newIndex > totalImages) {
          newIndex = 1;
        }

        setCurrentIndex(newIndex);
        setDragDirection(deltaX > 0 ? 1 : -1);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);

      // Continue spinning in the direction of the last drag
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          let nextIndex = prevIndex + dragDirection;
          if (nextIndex < 1) {
            nextIndex = totalImages;
          } else if (nextIndex > totalImages) {
            nextIndex = 1;
          }
          return nextIndex;
        });
      }, 1000 / 12000); // Approximately 16.67ms for 60fps
    };

    const imgElement = imageRef.current;

    imgElement.addEventListener('mousemove', handleMouseMove);
    imgElement.addEventListener('mouseup', handleMouseUp);
    imgElement.addEventListener('mouseleave', handleMouseUp);

    return () => {
      imgElement.removeEventListener('mousemove', handleMouseMove);
      imgElement.removeEventListener('mouseup', handleMouseUp);
      imgElement.removeEventListener('mouseleave', handleMouseUp);
      clearInterval(intervalRef.current);
    };
  }, [isDragging, dragStartX, currentIndex, dragDirection, totalImages]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    clearInterval(intervalRef.current); // Stop any ongoing rotation
  };

  const getImagePath = (index) => `./img/${index.toString().padStart(4, "0")}.png`;

  return (
    <div
      ref={imageRef}
      className='img-container'
      onMouseDown={handleMouseDown}
    >
      <img 
        src={getImagePath(currentIndex)} 
        alt="360 view"  
      />
    </div>  
  );
};

export default ModelViewer;
