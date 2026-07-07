import React from "react";

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='270' viewBox='0 0 480 270'%3E%3Crect width='480' height='270' fill='%23161616'/%3E%3Ctext x='50%25' y='50%25' fill='%23d9d9d9' font-family='Arial, sans-serif' font-size='20' text-anchor='middle' dominant-baseline='middle'%3EDevTube%3C/text%3E%3C/svg%3E";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  fallbackSrc = FALLBACK_IMAGE,
  onError,
  ...props
}) => {
  const priorityProps = fetchPriority ? { fetchpriority: fetchPriority } : {};

  const handleError = (event) => {
    if (event.currentTarget.src !== fallbackSrc) {
      event.currentTarget.src = fallbackSrc;
    }

    onError?.(event);
  };

  return (
    <img
      src={src || fallbackSrc}
      alt={alt || ""}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      {...priorityProps}
      {...props}
    />
  );
};

export default OptimizedImage;
