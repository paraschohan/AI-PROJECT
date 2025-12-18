import React from 'react';
import Layout from '@theme/Layout';
import PhysicalAIChatbot from '../components/Chatbot/PhysicalAIChatbot';

interface WithChatbotLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const WithChatbotLayout: React.FC<WithChatbotLayoutProps> = ({ children, title, description }) => {
  return (
    <Layout title={title} description={description}>
      {children}
      <PhysicalAIChatbot />
    </Layout>
  );
};

export default WithChatbotLayout;