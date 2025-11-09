import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form
      className="chat-input flex border-t border-gray-300 p-2 bg-gray-100"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 rounded-lg border border-gray-300 outline-none"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
