import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";
import responses from "./data/responses";

const App = () => {
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  // Initial greeting messages
  useEffect(() => {
    setMessages([
      { sender: "bot", text: responses.greetings[0] },
      { sender: "bot", text: responses.help[0] },
    ]);
  }, []);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        behavior: "smooth", // smooth scroll
      });
    }
  }, [messages]);

  const handleSend = (userText) => {
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    const lower = userText.toLowerCase();
    let botReply;

    if (lower.includes("hi") || lower.includes("hello")) {
      botReply =
        responses.greetings[
          Math.floor(Math.random() * responses.greetings.length)
        ];
    } else if (lower.includes("bye") || lower.includes("goodbye")) {
      botReply =
        responses.farewells[
          Math.floor(Math.random() * responses.farewells.length)
        ];
    } else if (lower.includes("movie") || lower.includes("film")) {
      botReply =
        responses.movie[Math.floor(Math.random() * responses.movie.length)];
    } else if (lower.includes("recommend") || lower.includes("suggest")) {
      botReply =
        responses.recommend[
          Math.floor(Math.random() * responses.recommend.length)
        ];
    } else if (lower.includes("help")) {
      botReply = responses.help[0];
    } else {
      botReply =
        responses.smalltalk[
          Math.floor(Math.random() * responses.smalltalk.length)
        ];
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 p-4">
      <div className="app flex flex-col w-[420px] h-[640px] bg-white rounded-2xl shadow-lg overflow-hidden">
        <Header />
        <div
          ref={chatWindowRef}
          className="chat-window flex flex-col flex-grow p-4 gap-2 overflow-y-auto"
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} sender={msg.sender} text={msg.text} />
          ))}
        </div>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default App;
