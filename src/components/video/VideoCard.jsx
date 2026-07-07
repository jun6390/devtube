import React from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from '../common/OptimizedImage'

const VideoCard = ({ videos }) => {
    return (
        <>
            {videos.map((video, key) => (
                <div className="video" key={key}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.videoId}`}>
                            <OptimizedImage
                                src={video.img}
                                alt={video.title}
                                width="480"
                                height="270"
                                loading={key < 4 ? 'eager' : 'lazy'}
                                fetchPriority={key < 4 ? 'high' : undefined}
                            />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoCard
