import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import './VideoConfig.css';

const VideoConfig = () => {

  const [ selectedOption, setSelectedOption ] = useState('video');
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  const options = [
    { id: 'video',  type: 'image', label: 'Video',    src: './Image0.png' },
    { id: 'image1', type: 'image', label: 'Image 1',  src: './Image1.png'  },
    { id: 'image2', type: 'image', label: 'Image 2',  src: './Image2.png'  },
    { id: 'image3', type: 'image', label: 'Image 3',  src: './Image3.png'  },
  ];

  // Function to render the selected media
  const renderSelectedMedia = () => {
    const selected = options.find((option) => option.id === selectedOption);

    if (selected.id === 'video') {
      return <VideoPlayer className={selected.id !== 'video' ? 'hidden' : '' }/>;
    } else {
      return <img 
          src={selected.src} 
          alt={selected.label} 
          className={`mediaImage ${selected.id === 'video' ? 'hidden' : ''}`}/>;
    }
  };


  return (
    <div className="videoConfig">
      <div className='media__Container'>
        <div className="mediaSection">
          <div className="mediaContainer">{renderSelectedMedia()}</div>
        </div>

        <div className="viewingOptions">
          <div className="viewOptionsGrid">
            {options.map((option) => (
              <div
                key={option.id}
                className={`viewOption ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.id)}
              >
                {option.type === 'video' ? (
                  <video src={option.src} className="optionThumbnail" />
                ) : (
                  <img src={option.src} alt={option.label} className="optionThumbnail" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='detailsContainer'>
        <div className="productInfo">
          <h2>Product Details</h2>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt 
             ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut 
             aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit 
             in voluptate velit esse cillum dolore 
             eu fugiat nulla pariatur. Excepteur sint 
             occaecat cupidatat non proident, sunt in 
             culpa qui officia deserunt mollit anim id est laborum.</p>
          <h3>Price: $499.99</h3>
          <button className="addToCartButton">Add to Cart</button>
        </div>

        <div className="customerReviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <h3>John Doe</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Absolutely love this model! The details are incredible and it looks amazing in my VR setup.</p>
          </div>
          <div className="review">
            <h3>Jane Smith</h3>
            <p>⭐⭐⭐⭐</p>
            <p>Great model, but the price is a bit high. Overall, I'm satisfied with my purchase.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConfig;
