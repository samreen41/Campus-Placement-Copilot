import MainLayout from "../../components/layout/MainLayout";

import UploadBox from "../../components/resume/UploadBox";
import ScoreCard from "../../components/resume/ScoreCard";
import SkillCard from "../../components/resume/SkillCard";
import SuggestionCard from "../../components/resume/SuggestionCard";

function Resume() {
  return (
  <MainLayout>

    <h1 className="text-4xl font-bold text-blue-600">
      📄 AI Resume Analyzer
    </h1>

    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      <UploadBox />
      <ScoreCard />
    </div>

    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      <SkillCard />
      <SuggestionCard />
    </div>

  </MainLayout>
);
}

export default Resume;