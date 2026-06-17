import MainLayout from "../../components/layout/MainLayout";

function Profile() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        👤 My Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

        <div className="space-y-4">

          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">College</label>
            <input
              type="text"
              placeholder="Enter your college"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Branch</label>
            <input
              type="text"
              placeholder="Enter your branch"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
            Save Profile
          </button>

        </div>

      </div>

    </MainLayout>
  );
}

export default Profile;