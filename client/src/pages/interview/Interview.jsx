import MainLayout from "../../components/layout/MainLayout";

import InterviewCard from "../../components/interview/InterviewCard";
import QuestionCard from "../../components/interview/QuestionCard";
import ScoreCard from "../../components/interview/ScoreCard";
import Timer from "../../components/interview/Timer";

function Interview() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        🎤 AI Mock Interview
      </h1>

      <p className="text-gray-500 mt-2">
        Improve your placement interview skills.
      </p>

      <div className="mt-8">
        <InterviewCard />
      </div>

      <div className="mt-8">
        <Timer />
      </div>

      <div className="mt-8">
        <QuestionCard />
      </div>

      <div className="mt-8">
        <ScoreCard />
      </div>

    </MainLayout>
  );
}

export default Interview;