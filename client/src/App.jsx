function Login() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Campus Placement Copilot
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        <p className="text-center mt-6 text-gray-500">
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
}

export default Login;