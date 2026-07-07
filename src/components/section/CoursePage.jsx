import React from "react";

import Main from "./Main";
import VideoCard from "../video/VideoCard";

const CoursePage = ({ title, description, sectionId, heading, videos }) => {
  return (
    <Main title={title} description={description}>
      <section id={sectionId}>
        <h2>{heading}</h2>
        <div className="video__inner">
          <VideoCard videos={videos} />
        </div>
      </section>
    </Main>
  );
};

export default CoursePage;
