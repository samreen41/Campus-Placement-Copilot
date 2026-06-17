import MainLayout from "../../components/layout/MainLayout";

import ChatBox from "../../components/ai/ChatBox";
import ChatInput from "../../components/ai/ChatInput";
import SuggestionCard from "../../components/ai/SuggestionCard";

function AIAssistant() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        🤖 AI Career Assistant
      </h1>

      <p className="text-gray-500 mt-2">
        Get career guidance, resume tips and interview preparation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

        <div className="lg:col-span-2">

          <ChatBox />

          <div className="mt-6"></div>
          <ChatInput />

        </div>

        <SuggestionCard />

      </div>

    </MainLayout>
  );
}

export default AIAssistant;