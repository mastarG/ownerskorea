import { MessageCircle } from 'lucide-react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <button className="chatbot-btn" aria-label="Open AI Chatbot">
      <MessageCircle size={28} />
    </button>
  );
};

export default Chatbot;
