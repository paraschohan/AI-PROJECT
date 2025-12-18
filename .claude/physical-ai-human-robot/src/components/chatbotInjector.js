import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // Wait for the DOM to be fully loaded
  window.addEventListener('load', () => {
    // Dynamically import the chatbot when DOM is available
    import('./Chatbot/PhysicalAIChatbot').then(({ default: PhysicalAIChatbot }) => {
      // Check if the chatbot container already exists to avoid duplicates
      let chatbotContainer = document.getElementById('physical-ai-chatbot-container');
      if (!chatbotContainer) {
        // Create a container for the chatbot
        chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'physical-ai-chatbot-container';
        document.body.appendChild(chatbotContainer);
      }

      // Import React and React DOM to render the component
      Promise.all([
        import('react'),
        import('react-dom/client')
      ]).then(([reactModule, { createRoot }]) => {
        const React = reactModule;
        const root = createRoot(chatbotContainer);
        root.render(React.createElement(PhysicalAIChatbot));
      });
    });
  });
}