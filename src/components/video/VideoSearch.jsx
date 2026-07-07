import React from 'react'
import { Link } from 'react-router-dom'
import OptimizedImage from '../common/OptimizedImage'

const getThumbnail = (video) => {
    return video.snippet?.thumbnails?.high?.url
        || video.snippet?.thumbnails?.medium?.url
        || video.snippet?.thumbnails?.default?.url;
}

const VideoSearch = ({ videos }) => {
    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.id.videoId}`}>
                            <OptimizedImage
                                src={getThumbnail(video)}
                                alt={video.snippet?.title}
                                width="480"
                                height="270"
                                loading={index < 4 ? 'eager' : 'lazy'}
                                fetchPriority={index < 4 ? 'high' : undefined}
                            />
                        </Link>
                    </div>
                    <div className="video__info">
                        <div className="title">
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </div>
                        <div className="info">
                            <span className="author">
                                <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoSearch
