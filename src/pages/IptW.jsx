import CoursePage from "../components/section/CoursePage";
import { iptwText } from "../data/iptw";

const IptW = () => {
  return (
    <CoursePage
      title="정보처리기사 필기"
      description="정보처리기사 필기 강의입니다."
      sectionId="iptwPage"
      heading="0원으로 정보처리기사 필기 합격하기!"
      videos={iptwText}
    />
  );
};

export default IptW;
