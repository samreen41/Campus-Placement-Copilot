function ProgressCard({ title, value }) {

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${value}%` }}
        ></div>

      </div>

      <p className="mt-2 font-semibold">
        {value}%
      </p>

    </div>

  );

}

export default ProgressCard;