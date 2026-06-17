function SuggestionCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold text-blue-600">
        AI Suggestions
      </h2>

      <div className="mt-4 space-y-3">

        <div className="bg-blue-50 p-3 rounded-xl">
          Improve my resume
        </div>

        <div className="bg-blue-50 p-3 rounded-xl">
          Best React interview questions
        </div>

        <div className="bg-blue-50 p-3 rounded-xl">
          Career roadmap for Full Stack Developer
        </div>

      </div>

    </div>
  );
}

export default SuggestionCard;