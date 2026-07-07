import React from "react";

import SkeletonBlock from "./SkeletonBlock";

const VideoDetailSkeleton = () => {
  return (
    <div className="video__view skeleton__videoDetail">
      <div className="video__play video__play--skeleton">
        <SkeletonBlock className="skeleton__player" />
      </div>
      <div className="video__info">
        <h2 className="video__title">
          <SkeletonBlock className="skeleton__line skeleton__line--heading" />
          <SkeletonBlock className="skeleton__line skeleton__line--medium" />
        </h2>
        <div className="video__channel">
          <div className="id">
            <SkeletonBlock className="skeleton__line skeleton__line--title" />
          </div>
          <div className="count">
            <span>
              <SkeletonBlock className="skeleton__pill" />
            </span>
            <span>
              <SkeletonBlock className="skeleton__pill" />
            </span>
            <span>
              <SkeletonBlock className="skeleton__pill" />
            </span>
          </div>
        </div>
        <div className="video__desc">
          <SkeletonBlock className="skeleton__line skeleton__line--wide" />
          <SkeletonBlock className="skeleton__line skeleton__line--wide" />
          <SkeletonBlock className="skeleton__line skeleton__line--medium" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetailSkeleton;
