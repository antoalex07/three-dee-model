import React from 'react'
import './ImageConfig.css'
import Image2Video from '../../components/Image2Video'

const ImageConfig = () => {
  return (
    <div className='imageConfig'>
      <div className='model__container'>
        <Image2Video/>

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
  )
}

export default ImageConfig