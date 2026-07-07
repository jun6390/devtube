import React from "react";

import SkeletonBlock from "./SkeletonBlock";

const VideoSearchSkeleton = ({ count = 8 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div className="video skeleton__video" key={index}>
          <div className="video__thumb">
            <SkeletonBlock className="skeleton__thumbLink" />
          </div>
          <div className="video__info">
            <div className="title">
              <SkeletonBlock className="skeleton__line skeleton__line--title" />
              <SkeletonBlock className="skeleton__line skeleton__line--medium" />
            </div>
            <div className="info">
              <span className="author">
                <SkeletonBlock className="skeleton__line skeleton__line--short" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoSearchSkeleton;
