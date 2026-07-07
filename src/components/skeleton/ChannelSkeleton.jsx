import React from "react";

import SkeletonBlock from "./SkeletonBlock";
import VideoSearchSkeleton from "./VideoSearchSkeleton";

const ChannelSkeleton = () => {
  return (
    <div className="channel__inner skeleton__channel">
      <div className="channel__header channel__header--skeleton">
        <div className="circle">
          <SkeletonBlock className="skeleton__circle" />
        </div>
      </div>
      <div className="channel__info">
        <h3 className="title">
          <SkeletonBlock className="skeleton__line skeleton__line--channelTitle" />
        </h3>
        <p className="desc">
          <SkeletonBlock className="skeleton__line skeleton__line--channelDesc" />
          <SkeletonBlock className="skeleton__line skeleton__line--channelDescShort" />
        </p>
        <div className="info">
          <span>
            <SkeletonBlock className="skeleton__stat" />
          </span>
          <span>
            <SkeletonBlock className="skeleton__stat" />
          </span>
          <span>
            <SkeletonBlock className="skeleton__stat" />
          </span>
        </div>
      </div>
      <div className="channel__video video__inner search">
        <VideoSearchSkeleton count={8} />
      </div>
      <div className="channel__more">
        <button type="button" aria-hidden="true" tabIndex="-1">
          <SkeletonBlock className="skeleton__line skeleton__line--button" />
        </button>
      </div>
    </div>
  );
};

export default ChannelSkeleton;
