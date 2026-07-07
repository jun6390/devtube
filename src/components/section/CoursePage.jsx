import React, { useEffect, useState } from "react";

import Main from "./Main";
import VideoCard from "../video/VideoCard";

const CoursePage = ({ title, description, sectionId, heading, videos }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const pageClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main title={title} description={description}>
      <section id={sectionId} className={pageClass}>
        <h2>{heading}</h2>
        <div className="video__inner">
          <VideoCard videos={videos} />
        </div>
      </section>
    </Main>
  );
};

export default CoursePage;
