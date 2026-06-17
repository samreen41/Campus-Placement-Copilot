function ActivityCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold">
            Resume Uploaded
          </h3>
          <p className="text-gray-500 text-sm">
            Your resume was analyzed successfully.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold">
            Job Applied
          </h3>
          <p className="text-gray-500 text-sm">
            Applied for Frontend Developer at Google.
          </p>
        </div>

        <div className="border-l-4 border-purple-500 pl-4">
          <h3 className="font-semibold">
            Mock Interview Completed
          </h3>
          <p className="text-gray-500 text-sm">
            Score: 88%
          </p>
        </div>

      </div>

    </div>
  );
}

export default ActivityCard;