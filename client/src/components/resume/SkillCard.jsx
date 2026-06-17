function SkillCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-600">
        Skills Detected
      </h2>

      <div className="flex flex-wrap gap-3 mt-6">

        <span className="bg-blue-100 px-4 py-2 rounded-xl">
          React
        </span>

        <span className="bg-green-100 px-4 py-2 rounded-xl">
          Node.js
        </span>

        <span className="bg-yellow-100 px-4 py-2 rounded-xl">
          MongoDB
        </span>

        <span className="bg-purple-100 px-4 py-2 rounded-xl">
          JavaScript
        </span>

      </div>

    </div>
  );
}

export default SkillCard;