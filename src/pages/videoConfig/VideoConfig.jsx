import React from 'react'
import VideoPlayer from '../../components/VideoPlayer'
import './VideoConfig.css'

const VideoConfig = () => {
  return (
    <div className='videoConfig'>
      <div className='heading'>
        <h1>Seamless Video Loop of 3D Object</h1>
      </div>
      <div className='model__container'>
        <VideoPlayer/>
      </div>
    </div>
  )
}

export default VideoConfig