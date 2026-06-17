function QuestionCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-600">
        Question 1
      </h2>

      <p className="mt-4 text-lg">
        Explain the Virtual DOM in React.
      </p>

      <textarea
        rows="6"
        placeholder="Type your answer..."
        className="w-full border rounded-xl p-4 mt-6"
      />

    </div>
  );
}

export default QuestionCard;