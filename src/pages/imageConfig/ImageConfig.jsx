import React from 'react'
import Image360Viewer from '../../components/Image360Viewer'
import './ImageConfig.css'

const ImageConfig = () => {
  return (
    <div className='imageConfig'>
      <div className='heading'>
        <h1>Image Sequencing With Hover Effect</h1>
      </div>
      <div className='model__container'>
        <Image360Viewer/>
      </div>
    </div>
  )
}

export default ImageConfig