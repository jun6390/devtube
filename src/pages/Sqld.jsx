import CoursePage from "../components/section/CoursePage";
import { sqldText } from "../data/sqld";

const Sqld = () => {
  return (
    <CoursePage
      title="SQLD"
      description="SQLD 강의입니다."
      sectionId="sqldPage"
      heading="0원으로 SQLD 합격하기!"
      videos={sqldText}
    />
  );
};

export default Sqld;
