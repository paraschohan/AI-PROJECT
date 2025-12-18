import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { createRoot } from 'react-dom/client';
import PhysicalAIChatbot from './src/components/Chatbot/PhysicalAIChatbot';

if (ExecutionEnvironment.canUseDOM) {
  // Create a container for the chatbot
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'physical-ai-chatbot-container';
  document.body.appendChild(chatbotContainer);

  // Render the chatbot component
  const root = createRoot(chatbotContainer);
  root.render(<PhysicalAIChatbot />);
}