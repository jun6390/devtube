import React, { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import ScrollTo from "../../utils/scrollTo";

const setMetaContent = (selector, attributeName, attributeValue, content) => {
  let meta = document.querySelector(selector);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attributeName, attributeValue);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const getPageTitle = (title) => {
  if (!title || title === "DevTube") {
    return "DevTube";
  }

  return `${title} | DevTube`;
};

const getPageDescription = (description) => {
  const defaultDescription =
    "개발자와 자격증 학습자를 위한 영상 큐레이션 플랫폼입니다.";
  const normalizedDescription = (description || defaultDescription)
    .replace(/\s+/g, " ")
    .trim();

  return normalizedDescription.length > 160
    ? `${normalizedDescription.slice(0, 157)}...`
    : normalizedDescription;
};

const Main = (props) => {
  useEffect(() => {
    const title = getPageTitle(props.title);
    const description = getPageDescription(props.description);

    document.title = title;
    setMetaContent('meta[name="description"]', "name", "description", description);
    setMetaContent('meta[property="og:title"]', "property", "og:title", title);
    setMetaContent(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMetaContent(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
  }, [props.title, props.description]);

  return (
    <>
      <div id="skip">
        <a href="#main">본문 바로가기</a>
      </div>
      <ScrollTo />

      <Header />
      <main id="main" tabIndex="-1">
        <Search />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
