import React from "react";

const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`chat-bubble ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatBubble;
