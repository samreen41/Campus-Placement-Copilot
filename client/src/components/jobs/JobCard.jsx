function JobCard({
  company,
  role,
  location,
  type,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">

      <h2 className="text-2xl font-bold text-blue-600">
        {company}
      </h2>

      <p className="mt-2 text-lg font-semibold">
        {role}
      </p>

      <p className="text-gray-500 mt-2">
        📍 {location}
      </p>

      <p className="text-gray-500">
        💼 {type}
      </p>

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;