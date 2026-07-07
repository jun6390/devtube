import React from 'react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main';
import VideoSearch from '../components/video/VideoSearch';
import ChannelSkeleton from '../components/skeleton/ChannelSkeleton';
import ErrorMessage from '../components/common/ErrorMessage';

import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
    const { channelId } = useParams();

    const channelQuery = useQuery({
        queryKey: ['channelDetail', channelId],
        queryFn: async ({ signal }) => {
            const data = await fetchFromAPI(`channels?part=snippet,statistics,brandingSettings&id=${channelId}`, { signal });
            return data?.items?.[0] || null;
        },
        enabled: Boolean(channelId),
    });

    const channelVideosQuery = useInfiniteQuery({
        queryKey: ['channelVideos', channelId],
        queryFn: ({ pageParam = '', signal }) => {
            const pageToken = pageParam ? `&pageToken=${pageParam}` : '';

            return fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date${pageToken}`, { signal });
        },
        enabled: Boolean(channelId),
        initialPageParam: '',
        getNextPageParam: (lastPage) => lastPage?.nextPageToken || undefined,
    });

    const channelDetail = channelQuery.data;
    const channelVideo = channelVideosQuery.data?.pages.flatMap((page) => page?.items || []) || [];
    const isLoading = channelQuery.isLoading || channelVideosQuery.isLoading;
    const isError = channelQuery.isError || channelVideosQuery.isError;
    const error = channelQuery.error || channelVideosQuery.error;
    const bannerUrl = channelDetail?.brandingSettings?.image?.bannerExternalUrl;
    const thumbnailUrl = channelDetail?.snippet?.thumbnails?.high?.url;
    const channelTitle = channelDetail?.snippet?.title || '채널';

    const handleRetry = () => {
        channelQuery.refetch();
        channelVideosQuery.refetch();
    };

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            
            <section id='channel'>
                {isLoading ? (
                    <ChannelSkeleton />
                ) : isError ? (
                    <ErrorMessage error={error} onRetry={handleRetry} />
                ) : !channelDetail ? (
                    <ErrorMessage
                        title="채널 정보를 찾을 수 없습니다"
                        message="요청한 채널 정보가 없거나 일시적으로 불러올 수 없습니다."
                        onRetry={handleRetry}
                    />
                ) : (
                    <div className='channel__inner'>
                        <div className='channel__header' style={bannerUrl ? { backgroundImage: `url(${bannerUrl})` } : undefined}>
                            <div className='circle'>
                                {thumbnailUrl && <img src={thumbnailUrl} alt={channelTitle} />}
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelTitle}</h3>
                            <p className='desc'>{channelDetail.snippet?.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics?.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics?.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics?.viewCount}</span>
                            </div>
                        </div>
                        <div className='channel__video video__inner search'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                        <div className="channel__more">
                            {channelVideosQuery.hasNextPage && (
                                <button
                                    type="button"
                                    onClick={() => channelVideosQuery.fetchNextPage()}
                                    disabled={channelVideosQuery.isFetchingNextPage}
                                >
                                    {channelVideosQuery.isFetchingNextPage ? '불러오는 중...' : '더보기'}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channel
