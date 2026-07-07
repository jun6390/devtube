import React from "react";

const SkeletonBlock = ({ className = "" }) => {
  return <span className={`skeleton__block ${className}`.trim()} />;
};

export default SkeletonBlock;
