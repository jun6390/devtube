import {
  LuVideo,
  LuUsers,
  LuNotebookText,
  LuFileCheck2,
  LuMonitorCheck,
  LuFileCode2,
  LuDatabase,
} from "react-icons/lu";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
  {
    title: "추천 영상",
    icon: <LuVideo />,
    src: "/today",
  },
  {
    title: "추천 개발자",
    icon: <LuUsers />,
    src: "/developer",
  },
  {
    title: "정보처리기사 필기",
    icon: <LuNotebookText />,
    src: "/iptw",
  },
  {
    title: "정보처리기사 실기",
    icon: <LuFileCheck2 />,
    src: "/iptp",
  },
  {
    title: "웹디자인개발기능사 필기",
    icon: <LuMonitorCheck />,
    src: "/webdw",
  },
  {
    title: "웹디자인개발기능사 실기",
    icon: <LuFileCode2 />,
    src: "/webdp",
  },
  {
    title: "SQLD",
    icon: <LuDatabase />,
    src: "/sqld",
  },
];

export const searchKeyword = [
  {
    title: "HTML",
    src: "/search/html",
  },
  {
    title: "CSS",
    src: "/search/css",
  },
  {
    title: "JavaScript",
    src: "/search/javascript",
  },
  {
    title: "React.js",
    src: "/search/react.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/node.js",
  },
  {
    title: "SQL",
    src: "/search/sql",
  },
  {
    title: "portfolio",
    src: "/search/React Portfolio",
  },
  {
    title: "music",
    src: "/search/NewJeans",
  },
];

export const snsLink = [
  {
    title: "GitHub",
    url: "https://github.com/haejunbag131-maker",
    icon: <AiFillGithub />,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@%EB%B0%95%ED%95%B4%EC%A4%80-e7v",
    icon: <AiFillYoutube />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/pxhxjxn",
    icon: <AiOutlineInstagram />,
  },
];
