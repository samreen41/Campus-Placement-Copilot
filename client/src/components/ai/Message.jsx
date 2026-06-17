function Message({ sender, text }) {
  return (
    <div
      className={`p-4 rounded-2xl max-w-xl ${
        sender === "user"
          ? "bg-blue-600 text-white ml-auto"
          : "bg-white shadow text-gray-700"
      }`}
    >
      {text}
    </div>
  );
}

export default Message;