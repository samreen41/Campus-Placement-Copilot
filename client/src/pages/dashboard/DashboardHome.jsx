function DashboardHome() {
  return (

    <div>

      <h1 className="text-4xl font-bold text-blue-600">

        Welcome 👋

      </h1>

      <p className="mt-3 text-gray-500">

        Welcome to Campus Placement Copilot

      </p>

      <div className="grid grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500">

            Applications

          </h2>

          <h1 className="text-5xl font-bold text-blue-600">

            12

          </h1>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500">

            Resume Score

          </h2>

          <h1 className="text-5xl font-bold text-green-600">

            92%

          </h1>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500">

            Interview Score

          </h2>

          <h1 className="text-5xl font-bold text-purple-600">

            88%

          </h1>

        </div>

      </div>

    </div>

  );
}

export default DashboardHome;