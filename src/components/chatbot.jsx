import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

function Chatbot() {
  const botName = "AssistBot";
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "bot", text: `👋 Hi, I'm ${botName}. Let’s get started!` },
  ]);
  const [step, setStep] = useState(0);

  // Example Q&A Flow
  const qaFlow = [
    {
      question: "What do you want help with?",
      options: ["Services", "Pricing", "Support"],
      answers: {
        Services: "We provide IT services including Web, App, and Automation.",
        Pricing: "Our pricing is flexible. Contact sales for details.",
        Support: "You can reach our support team 24/7 via email or chat.",
      },
    },
    {
      question: "Do you want more details?",
      options: ["Yes", "No"],
      answers: {
        Yes: "Great! I’ll connect you with our team.",
        No: "Alright. Do you have any other doubts?",
      },
    },
  ];

  // Floating bubble timing
  useEffect(() => {
    let hideTimer;
    if (showBubble) {
      hideTimer = setTimeout(() => setShowBubble(false), 5000);
    }
    const interval = setInterval(() => setShowBubble(true), 60000);
    return () => {
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, [showBubble]);

  const handleOptionClick = (option) => {
    const currentStep = qaFlow[step];
    const answer = currentStep.answers[option];

    // Show user choice
    setMessages((prev) => [...prev, { sender: "user", text: option }]);

    // Show bot answer
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);

      // Move to next step or restart
      setStep((prevStep) =>
        prevStep + 1 < qaFlow.length ? prevStep + 1 : 0
      );

      // Add next question after answer
      setTimeout(() => {
        const nextStep =
          step + 1 < qaFlow.length ? step + 1 : 0;
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: qaFlow[nextStep].question },
        ]);
      }, 800);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bubble + Icon container */}
      <div className="fixed bottom-6 right-6 flex items-end gap-2 z-50 animate-float">
  {/* Speech bubble notification */}
  {showBubble && !isOpen && (
    <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 text-sm">
      👋 Hi, I'm {botName}
    </div>
  )}

  {/* Chat Icon */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
  >
    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
  </button>
</div>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-3 rounded-t-xl font-semibold">
            {botName}
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "bot" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[70%] text-sm ${
                    msg.sender === "bot"
                      ? "bg-indigo-100 text-indigo-900"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options (buttons) */}
          <div className="p-2 border-t flex flex-wrap gap-2">
            {qaFlow[step].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
