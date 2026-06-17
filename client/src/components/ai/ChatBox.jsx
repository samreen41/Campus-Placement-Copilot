import Message from "./Message";

function ChatBox() {
  return (
        <div className="bg-slate-100 rounded-2xl p-6 max-h-[400px] overflow-y-auto space-y-4"> <Message
        sender="ai"
        text="Hello! I'm your AI Career Assistant."
      />

      <Message
        sender="user"
        text="How can I improve my resume?"
      />

      <Message
        sender="ai"
        text="Add projects, internships, certifications, and measurable achievements."
      />

    </div>
  );
}

export default ChatBox;