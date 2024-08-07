import React, { useEffect, useRef } from 'react'

const VideoPlayer = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.loop = true;
        videoElement.play();
    }, []);

  return (
    <div className='video-container'>
        <video ref={videoRef} autoPlay muted>
            <source src='./config2.webm' type='video/webm'/>
            Your Browser does not support the video tag
        </video>
    </div>
  )
}

export default VideoPlayer