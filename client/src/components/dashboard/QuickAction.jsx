import { useNavigate } from "react-router-dom";

function QuickAction({ title, icon, path }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all"
    >

      <div className="text-5xl">{icon}</div>

      <h2 className="mt-4 text-xl font-semibold">
        {title}
      </h2>

    </div>
  );
}

export default QuickAction;