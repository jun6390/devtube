import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Main from "../components/section/Main";

import VideoSearch from "../components/video/VideoSearch";
import VideoSearchSkeleton from "../components/skeleton/VideoSearchSkeleton";
import ErrorMessage from "../components/common/ErrorMessage";
import { fetchFromAPI } from "../utils/api";

const Search = () => {
  const { searchId } = useParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["searchVideos", searchId],
    queryFn: ({ pageParam = "", signal }) => {
      const query = encodeURIComponent(searchId);
      const pageToken = pageParam ? `&pageToken=${pageParam}` : "";

      return fetchFromAPI(
        `search?part=snippet&type=video&q=${query}${pageToken}`,
        { signal },
      );
    },
    enabled: Boolean(searchId),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage?.nextPageToken || undefined,
  });

  const videos = data?.pages.flatMap((page) => page?.items || []) || [];

  return (
    <Main title="유튜브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage">
        <h2>
          <em>{searchId}</em> 검색 결과입니다.
        </h2>
        {isLoading ? (
          <div className="video__inner search">
            <VideoSearchSkeleton count={8} />
          </div>
        ) : isError ? (
          <ErrorMessage error={error} onRetry={() => refetch()} />
        ) : (
          <div className="video__inner search">
            <VideoSearch videos={videos} />
          </div>
        )}
        <div className="video__more">
          {!isLoading && !isError && hasNextPage && (
            <button
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              aria-busy={isFetchingNextPage}
              aria-label={
                isFetchingNextPage
                  ? "검색 결과를 추가로 불러오는 중"
                  : "검색 결과 더보기"
              }
            >
              {isFetchingNextPage ? "불러오는 중..." : "더보기"}
            </button>
          )}
        </div>
      </section>
    </Main>
  );
};

export default Search;
