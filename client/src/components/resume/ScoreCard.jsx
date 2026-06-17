function ScoreCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-600">
        Resume Score
      </h2>

      <div className="text-6xl font-bold mt-6 text-blue-600">
        92%
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-6">

        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: "92%" }}
        ></div>

      </div>

    </div>
  );
}

export default ScoreCard;