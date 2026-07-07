import CoursePage from "../components/section/CoursePage";
import { webdpText } from "../data/webdp";

const WebdP = () => {
  return (
    <CoursePage
      title="웹디자인개발기능사 실기"
      description="웹디자인개발기능사 실기 강의입니다."
      sectionId="webdpPage"
      heading="0원으로 웹디자인개발기능사 실기 합격하기!"
      videos={webdpText}
    />
  );
};

export default WebdP;
