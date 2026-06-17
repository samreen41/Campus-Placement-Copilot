function ApplicationCard({
  company,
  role,
  status,
  onDelete
}) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5">

      <h2 className="text-2xl font-bold">
        {company}
      </h2>

      <p className="mt-2 text-gray-600">
        {role}
      </p>

      <div className="flex justify-between items-center mt-6">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          {status}
        </span>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ApplicationCard;