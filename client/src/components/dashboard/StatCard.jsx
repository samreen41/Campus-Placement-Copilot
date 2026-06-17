function StatCard({ title, value, color }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-lg
        p-8
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
        border
        border-gray-100
      "
    >
      <h3 className="text-gray-500 text-lg font-medium">
        {title}
      </h3>

      <h1 className={`text-6xl font-bold mt-4 ${color}`}>
        {value}
      </h1>
    </div>
  );
}

export default StatCard;