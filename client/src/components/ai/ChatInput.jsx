import { useState } from "react";
import { askAI } from "../../services/aiService";

function ChatInput() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      const data = await askAI(message);
      setReply(data.reply);
      setMessage("");
    } catch (error) {
      setReply("Unable to connect to AI Server");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

      <div className="flex gap-4">

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI anything..."
          className="flex-1 border rounded-xl p-4 outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-6 rounded-xl"
        >
          Send
        </button>

      </div>

      {reply && (
        <div className="mt-6 bg-slate-100 p-4 rounded-xl">
          <h3 className="font-bold text-blue-600">
            AI Response
          </h3>

          <p className="mt-2">{reply}</p>
        </div>
      )}

    </div>
  );
}

export default ChatInput;