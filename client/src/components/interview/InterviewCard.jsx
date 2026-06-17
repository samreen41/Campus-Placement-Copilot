function InterviewCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

      <h2 className="text-3xl font-bold text-blue-600">
        AI Mock Interview
      </h2>

      <p className="mt-4 text-gray-500">
        Practice technical and HR questions.
      </p>

      <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl">
        Start Interview
      </button>

    </div>
  );
}

export default InterviewCard;