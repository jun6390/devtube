import CoursePage from "../components/section/CoursePage";
import { webdWText } from "../data/webdw";

const WebdW = () => {
  return (
    <CoursePage
      title="웹디자인개발기능사 필기"
      description="웹디자인개발기능사 필기 강의입니다."
      sectionId="webdwPage"
      heading="0원으로 웹디자인개발기능사 필기 합격하기!"
      videos={webdWText}
    />
  );
};

export default WebdW;
