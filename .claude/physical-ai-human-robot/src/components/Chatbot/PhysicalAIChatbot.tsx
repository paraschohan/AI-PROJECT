import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './PhysicalAIChatbot.module.css';
import { searchBookContent, physicalAIBookContent } from './PhysicalAIBookContent';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const PhysicalAIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Physical AI Assistant. Ask me anything about Physical AI, robotics, brain-computer interfaces, smart materials, or any other topic.',
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    setSuggestions([]); // Clear suggestions after user sends a message

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newBotMessage]);

      // Show follow-up suggestions if available
      if (botResponse.suggestions && botResponse.suggestions.length > 0) {
        setSuggestions(botResponse.suggestions);
      }

      setIsLoading(false);
    }, 1000);
  };

  // Enhanced response generator with follow-up suggestions
  const generateBotResponse = (userInput: string): { response: string, suggestions?: string[] } => {
    const lowerInput = userInput.toLowerCase();

    // Check if the question is related to Physical AI book topics
    const isPhysicalAIQuestion =
      lowerInput.includes('physical ai') ||
      lowerInput.includes('physical artificial intelligence') ||
      lowerInput.includes('robotics') ||
      lowerInput.includes('robot') ||
      lowerInput.includes('brain') ||
      lowerInput.includes('interface') ||
      lowerInput.includes('bci') ||
      lowerInput.includes('smart') && lowerInput.includes('material') ||
      lowerInput.includes('ethic') ||
      lowerInput.includes('moral') ||
      lowerInput.includes('societal') ||
      lowerInput.includes('future') ||
      lowerInput.includes('vision') ||
      lowerInput.includes('embodied cognition') ||
      lowerInput.includes('smart material') ||
      lowerInput.includes('neural implant') ||
      lowerInput.includes('shape-memory alloy') ||
      lowerInput.includes('electroactive polymer') ||
      lowerInput.includes('programmable matter') ||
      lowerInput.includes('soft robotics') ||
      lowerInput.includes('bio-inspired') ||
      lowerInput.includes('closed-loop system');

    if (isPhysicalAIQuestion) {
      // Search book content for relevant information
      const bookMatches = searchBookContent(userInput);

      // If we found specific content from the book, use that
      if (bookMatches.length > 0) {
        const response = bookMatches[0]; // Take the first relevant match

        // Contextual responses based on Physical AI topics with suggestions
        if (lowerInput.includes('physical ai') || lowerInput.includes('physical artificial intelligence')) {
          return {
            response: response,
            suggestions: [
              "How do smart materials work?",
              "What are examples of Physical AI?",
              "Explain embodied intelligence"
            ]
          };
        }

        if (lowerInput.includes('robotics') || lowerInput.includes('robot')) {
          return {
            response: response,
            suggestions: [
              "Tell me about soft robotics",
              "What is embodied cognition?",
              "Examples of bio-inspired robots"
            ]
          };
        }

        if (lowerInput.includes('brain') || lowerInput.includes('interface') || lowerInput.includes('bci')) {
          return {
            response: response,
            suggestions: [
              "How do neural implants work?",
              "What is an EEG-based interface?",
              "Applications of BCIs"
            ]
          };
        }

        if (lowerInput.includes('smart') && lowerInput.includes('material')) {
          return {
            response: response,
            suggestions: [
              "Examples of shape-memory alloys",
              "What are electroactive polymers?",
              "How does programmable matter work?"
            ]
          };
        }

        if (lowerInput.includes('ethic') || lowerInput.includes('moral') || lowerInput.includes('societal')) {
          return {
            response: response,
            suggestions: [
              "Ethical concerns of neural implants",
              "Privacy issues in Physical AI",
              "Human enhancement ethics"
            ]
          };
        }

        if (lowerInput.includes('future') || lowerInput.includes('vision')) {
          return {
            response: response,
            suggestions: [
              "What will Physical AI homes look like?",
              "Future of medical implants",
              "Self-healing materials"
            ]
          };
        }

        if (lowerInput.includes('embodied')) {
          return {
            response: response,
            suggestions: [
              "How does embodied cognition work?",
              "What is morphological computation?",
              "Examples of sensorimotor coupling"
            ]
          };
        }

        // Default for any other Physical AI related question
        return {
          response: response,
          suggestions: [
            "What is Physical AI?",
            "Explain robotics in Physical AI",
            "Brain-computer interfaces"
          ]
        };
      } else {
        // If no specific content found, use general responses
        if (lowerInput.includes('physical ai') || lowerInput.includes('physical artificial intelligence')) {
          return {
            response: "Physical AI refers to the integration of artificial intelligence capabilities directly into physical materials and systems. Unlike traditional AI that operates in digital spaces, Physical AI embeds computational intelligence into tangible objects, allowing them to sense, respond, and adapt to their environment. This includes applications in smart materials, soft robotics, and adaptive systems.",
            suggestions: [
              "How do smart materials work?",
              "What are examples of Physical AI?",
              "Explain embodied intelligence"
            ]
          };
        }

        if (lowerInput.includes('robotics') || lowerInput.includes('robot')) {
          return {
            response: "Robotics is a key application area for Physical AI. Modern robots increasingly incorporate distributed sensing and intelligence throughout their bodies, allowing for more adaptive and responsive behaviors. This includes soft robotics, bio-inspired designs, and robots with embedded learning capabilities.",
            suggestions: [
              "Tell me about soft robotics",
              "What is embodied cognition?",
              "Examples of bio-inspired robots"
            ]
          };
        }

        // Default response for Physical AI related questions
        return {
          response: "I'm your Physical AI Assistant. I can help answer questions about topics in the Physical AI book, such as: Physical AI fundamentals, robotics applications, brain-computer interfaces, smart materials, ethical considerations, and future directions. What would you like to know more about?",
          suggestions: [
            "What is Physical AI?",
            "Explain robotics in Physical AI",
            "Brain-computer interfaces"
          ]
        };
      }
    } else {
      // Handle general questions outside the book's scope
      // First, check if it's a greeting or simple social interaction
      if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        return {
          response: "Hello! I'm your Physical AI Assistant. While I specialize in topics related to Physical AI, robotics, brain-computer interfaces, and smart materials, I can also help with general questions. What would you like to know?",
          suggestions: [
            "What is Physical AI?",
            "Tell me about robotics",
            "Explain brain-computer interfaces"
          ]
        };
      }

      if (lowerInput.includes('how are you') || lowerInput.includes('how do you do') || lowerInput.includes('what are you')) {
        return {
          response: "I'm an AI assistant designed to help you with questions about Physical AI and related topics. I can also answer general questions. I'm here to assist you with understanding complex concepts from the Physical AI book as well as provide information on a wide range of subjects.",
          suggestions: [
            "What is Physical AI?",
            "Tell me about robotics",
            "Explain brain-computer interfaces"
          ]
        };
      }

      if (lowerInput.includes('thank')) {
        return {
          response: "You're welcome! Feel free to ask more questions about Physical AI, robotics, brain-computer interfaces, or any other topic you're curious about.",
          suggestions: [
            "What is Physical AI?",
            "Tell me about robotics",
            "Explain brain-computer interfaces"
          ]
        };
      }

      // For general questions outside the book's scope
      return {
        response: `I'm your Physical AI Assistant, but I can also help with general questions. Regarding "${userInput}", I can provide information based on my general knowledge. Physical AI is an interdisciplinary field combining robotics, artificial intelligence, and materials science to create systems that exhibit intelligent behavior in the physical world.`,
        suggestions: [
          "What is Physical AI?",
          "Tell me about robotics",
          "Explain brain-computer interfaces"
        ]
      };
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    // Simulate pressing enter to submit
    const formEvent = { preventDefault: () => {} } as React.FormEvent;
    handleSubmit(formEvent);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        text: 'Hello! I\'m your Physical AI Assistant. Ask me anything about Physical AI, robotics, brain-computer interfaces, or smart materials.',
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
    setSuggestions([]);
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Chatbot minimized view */}
      {!isOpen ? (
        <button
          className={styles.chatButton}
          onClick={toggleChat}
          aria-label="Open Physical AI Chatbot"
        >
          <span className={styles.chatIcon}>🤖</span>
          <span className={styles.chatButtonText}>Cheatbot</span>
        </button>
      ) : (
        /* Full chat interface */
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.headerIcon}>🤖</span>
              <span className={styles.headerTitle}>Physical AI Cheatbot</span>
            </div>
            <div className={styles.headerActions}>
              <button
                className={styles.clearButton}
                onClick={clearChat}
                aria-label="Clear chat history"
              >
                Clear
              </button>
              <button
                className={styles.closeButton}
                onClick={toggleChat}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={clsx(
                  styles.message,
                  styles[`${message.sender}Message`]
                )}
              >
                <div className={styles.messageContent}>
                  {message.text}
                </div>
                <div className={styles.messageTimestamp}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.message, styles.botMessage)}>
                <div className={styles.messageContent}>
                  <span className={styles.typingIndicator}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </div>
              </div>
            )}

            {/* Suggestions when the bot is not loading */}
            {!isLoading && suggestions.length > 0 && (
              <div className={styles.suggestionsContainer}>
                <div className={styles.suggestionsTitle}>Suggestions:</div>
                <div className={styles.suggestionsList}>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className={styles.suggestionButton}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.chatInputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Physical AI or anything else..."
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PhysicalAIChatbot;