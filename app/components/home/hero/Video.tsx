import React from 'react'

const Video = () => {
    return (
        <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source src="/images/rolex.mp4" type="video/mp4" />
            <source src="/images/rolex.mp4" type="video/ogg" />
        </video>
    )
}

export default Video
