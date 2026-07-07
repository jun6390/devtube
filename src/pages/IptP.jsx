import CoursePage from "../components/section/CoursePage";
import { iptpText } from "../data/iptp";

const IptP = () => {
  return (
    <CoursePage
      title="정보처리기사 실기"
      description="정보처리기사 실기 강의입니다."
      sectionId="iptpPage"
      heading="0원으로 정보처리기사 실기 합격하기!"
      videos={iptpText}
    />
  );
};

export default IptP;
