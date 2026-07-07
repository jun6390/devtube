import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/video/VideoSearch'
import VideoSearchSkeleton from '../components/skeleton/VideoSearchSkeleton'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken] = useState(null);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        setVideos([]);
        fetchVideos(searchId);
    }, [searchId]);

        const fetchVideos = (query, pageToken = '') => {
            fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
                .then((data) => {
                    setNextPageToken(data.nextPageToken);
                    setVideos((preVideos) => [...preVideos, ...data.items]);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching data', error);
                    setLoading(false);
                })
        }

        const handleLoadMore = () => {
            if(nextPageToken) {
                fetchVideos(searchId, nextPageToken);
            }
        }

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <h2><em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    {loading ? (
                        <VideoSearchSkeleton count={8} />
                    ) : (
                        <VideoSearch videos={videos} />
                    )}
                </div>
                <div className='video__more'>
                    {!loading && nextPageToken && (
                        <button onClick={handleLoadMore}>더보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search
