// Book content for the Physical AI chatbot
export const physicalAIBookContent = {
  "what-is-physical-ai": {
    title: "What is Physical AI?",
    content: `
      Physical AI, also known as Embodied AI, is a subfield of artificial intelligence that focuses on creating intelligent agents that can interact with the physical world through a body. Unlike traditional AI, which often exists purely in the digital realm, Physical AI systems have a physical presence that allows them to perceive their environment through sensors and act upon it using actuators.

      The "body" of a Physical AI can take many forms, from humanoid robots to autonomous vehicles to smart materials. The key characteristic is that the body is an integral part of the AI's learning and decision-making processes. The AI learns from its physical interactions with the world, and its physical form constrains and enables its actions in a way that shapes its intelligence.

      Core concepts include:
      - Embodied cognition: The idea that intelligence emerges from the interaction between an agent and its environment
      - Sensorimotor coupling: The continuous loop between sensing and acting in the physical world
      - Morphological computation: The idea that the physical form of an agent performs computations that would otherwise need to be done by a controller
    `,
  },

  "robotics": {
    title: "Robotics",
    content: `
      Robotics is a field of engineering and science that deals with the design, construction, operation, and use of robots. Robots are machines that can be programmed to perform a variety of tasks automatically. They are used in a wide range of applications, from manufacturing to healthcare to exploration.

      In the context of Physical AI, robotics is a key enabling technology. Robots provide the physical body that allows AI to interact with the world. The development of more advanced robots is essential for the advancement of Physical AI.

      Types of robots:
      - Industrial robots: Used in manufacturing for tasks such as welding, painting, and assembly.
      - Service robots: Used to perform tasks for humans, such as cleaning, delivering food, and providing assistance to the elderly and disabled.
      - Medical robots: Used in healthcare to perform tasks such as surgery, diagnosis, and rehabilitation.
      - Military robots: Used in warfare to perform tasks such as surveillance, reconnaissance, and combat.
      - Exploration robots: Used to explore dangerous or inaccessible environments, such as the deep sea and outer space.

      The development of new and improved robots is an active area of research. Researchers are working on developing robots that are more intelligent, adaptable, and capable of performing a wider range of tasks. These advances will enable the development of more sophisticated Physical AI systems in the future.
    `,
  },

  // Add more content sections as needed from the book
  "embodied-cognition": {
    title: "Embodied Cognition",
    content: `
      Embodied cognition is a theory in cognitive science that argues that intelligent behavior emerges from the interaction between an agent and its environment. Rather than viewing the mind as a computer that processes abstract symbols, embodied cognition suggests that cognitive processes are deeply rooted in the body's interactions with the world.

      The theory emphasizes that:
      - The body plays a constitutive role in cognitive processes
      - Environmental interactions shape cognitive functioning
      - Cognitive processes are not just implemented in biological structures, but are also spread across the environment

      In the context of Physical AI, embodied cognition provides a theoretical foundation for understanding how physical agents can exhibit intelligent behavior through their interactions with the physical world, rather than through abstract reasoning alone.
    `,
  },

  "brain-computer-interfaces": {
    title: "Brain-Computer Interfaces",
    content: `
      Brain-computer interfaces (BCIs) create direct communication pathways between the brain and external devices, allowing thought to control physical systems. This includes neural implants, EEG-based interfaces, and closed-loop systems that adapt to neural signals.

      Key aspects of BCIs include:
      - Neural signal acquisition: Capturing electrical signals from the brain
      - Signal processing: Decoding the neural signals to understand intended actions
      - Device control: Using the decoded signals to control external devices
      - Feedback loops: Providing sensory feedback to the user to improve control

      Applications of BCIs range from assistive technologies for people with disabilities to enhanced human capabilities and direct neural control of robots and other physical systems.
    `,
  },

  "smart-materials": {
    title: "Smart Materials",
    content: `
      Smart materials are substances that change their properties in response to external stimuli like temperature, pressure, light, or electromagnetic fields. In Physical AI, these materials can incorporate sensing, computation, and response capabilities, forming the basis for truly intelligent physical systems.

      Examples of smart materials include:
      - Shape-memory alloys: Materials that return to a predetermined shape when heated
      - Electroactive polymers: Materials that change shape when an electric field is applied
      - Programmable matter: Materials that can change their properties based on programming inputs
      - Self-healing materials: Materials that can autonomously repair damage

      These materials represent a convergence of materials science and artificial intelligence, where the physical properties of matter itself become part of the computational and control system.
    `,
  },

  "ethics-physical-ai": {
    title: "Ethics of Physical AI",
    content: `
      The ethics of Physical AI raise important questions about privacy, autonomy, and human identity. As AI becomes physically embodied in our environment and even within our bodies, we must consider issues like consent, data governance, equitable access, and the potential for human enhancement.

      Key ethical considerations include:
      - Privacy: How do we protect personal data from physical AI systems that can sense and track human behavior in the physical world?
      - Autonomy: How do we maintain human agency when AI systems are physically integrated into our lives?
      - Safety: How do we ensure physical AI systems are safe and reliable?
      - Equity: How do we ensure the benefits of Physical AI are distributed fairly across society?
      - Human identity: How do we understand ourselves when the boundary between human and machine becomes blurred?

      These systems blur the line between human and machine in unprecedented ways, requiring new frameworks for ethical analysis and governance.
    `,
  },

  "future-directions": {
    title: "Future Directions",
    content: `
      The future of Physical AI promises a world where the boundaries between digital and physical reality dissolve. We can expect to see:

      - Wearable technology that monitors health and responds to environmental conditions
      - Responsive architecture that adapts to inhabitants' needs and behaviors
      - Self-healing materials in vehicles, buildings, and infrastructure
      - Prosthetics that provide near-natural sensation and control
      - Smart textiles that adapt to temperature, light, and other environmental factors
      - Autonomous systems that work seamlessly with humans in shared physical spaces

      The challenge will be ensuring these advances benefit humanity broadly while addressing ethical concerns and potential risks. The development of robust, safe, and beneficial Physical AI systems will require interdisciplinary collaboration between engineers, scientists, ethicists, and policymakers.
    `,
  }
};

// Function to search content for relevant information
export function searchBookContent(query: string): string[] {
  const queryLower = query.toLowerCase();
  const matches: string[] = [];
  
  for (const [key, section] of Object.entries(physicalAIBookContent)) {
    if (
      section.title.toLowerCase().includes(queryLower) ||
      section.content.toLowerCase().includes(queryLower)
    ) {
      matches.push(`**${section.title}**: ${section.content.trim()}`);
    }
  }
  
  return matches;
}