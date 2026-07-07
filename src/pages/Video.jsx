import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main';
import VideoDetailSkeleton from '../components/skeleton/VideoDetailSkeleton';
import ErrorMessage from '../components/common/ErrorMessage';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const formatVideoTitle = (title) => {
    const [mainTitle, ...subTitles] = title.split(' | ');

    if (!subTitles.length) {
        return title;
    }

    return (
        <>
            <span className='video__titleMain'>{mainTitle}</span>
            <span className='video__titleSeparator'> | </span>
            <span className='video__titleSub'>{subTitles.join(' | ')}</span>
        </>
    );
};

const Video = () => {
    const { videoId } = useParams();

    const {
        data: videoDetail,
        error,
        isError,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['videoDetail', videoId],
        queryFn: async ({ signal }) => {
            const data = await fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`, { signal });
            return data?.items?.[0] || null;
        },
        enabled: Boolean(videoId),
    });

    return (
        <Main 
            title = "유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다.">
            
            <section id='videoViewPage'>
                {isLoading ? (
                    <VideoDetailSkeleton />
                ) : isError ? (
                    <ErrorMessage error={error} onRetry={() => refetch()} />
                ) : !videoDetail ? (
                    <ErrorMessage
                        title="영상 정보를 찾을 수 없습니다"
                        message="요청한 영상 정보가 없거나 일시적으로 불러올 수 없습니다."
                        onRetry={() => refetch()}
                    />
                ) : (
                    <div className='video__view'>
                        <div className='video__play'>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?controls=1&rel=0&playsinline=1`}
                                title={videoDetail.snippet.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>
                                {formatVideoTitle(videoDetail.snippet.title)}
                            </h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video
