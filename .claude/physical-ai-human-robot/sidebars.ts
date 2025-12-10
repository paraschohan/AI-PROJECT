import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // We explicitly define the sidebar structure to only include the book content.
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1: The Foundations',
      items: [
        {
          type: 'category',
          label: 'Chapter 1: Introduction to Physical AI',
          items: [
            'part1/chapter1/what-is-physical-ai',
            'part1/chapter1/a-brief-history-of-physical-ai',
            'part1/chapter1/why-is-physical-ai-important',
          ],
        },
        {
            type: 'category',
            label: 'Chapter 2: Core Concepts',
            items: [
              'part1/chapter2/sensors-and-actuators',
              'part1/chapter2/control-systems',
              'part1/chapter2/machine-learning-for-physical-systems',
            ],
        },
        {
            type: 'category',
            label: 'Chapter 3: The Mind-Body Connection',
            items: [
              'part1/chapter3/embodied-cognition',
              'part1/chapter3/morphological-computation',
            ],
        }
      ],
    },
    {
        type: 'category',
        label: 'Part 2: Applications and Implications',
        items: [
            {
                type: 'category',
                label: 'Chapter 4: Robotics and Automation',
                items: [
                  'part2/chapter4/robotics',
                  'part2/chapter4/smart-materials',
                  'part2/chapter4/wearable-technology',
                ],
            },
            {
                type: 'category',
                label: 'Chapter 5: Intelligent Environments',
                items: [
                    'part2/chapter5/responsive-architectures',
                    'part2/chapter5/programmable-matter',
                    'part2/chapter5/self-healing-materials',
                ],
            },
            {
                type: 'category',
                label: 'Chapter 6: Human-Computer Interaction',
                items: [
                    'part2/chapter6/brain-computer-interfaces',
                    'part2/chapter6/haptic-interfaces',
                    'part2/chapter6/exoskeletons-and-prosthetics',
                ],
            },
        ],
    },
    {
        type: 'category',
        label: 'Part 3: The Future of Physical AI',
        items: [
            {
                type: 'category',
                label: 'Chapter 7: Societal Impact',
                items: [
                    'part3/chapter7/ethical-considerations',
                    'part3/chapter7/privacy-and-surveillance',
                    'part3/chapter7/job-displacement',
                    'part3/chapter7/chapter7-solutions',
                ],
            },
            {
                type: 'category',
                label: 'Chapter 8: The Singularity and Beyond',
                items: [
                    'part3/chapter8/the-future-of-human-ai-collaboration',
                    'part3/chapter8/the-singularity-and-beyond',
                    'part3/chapter8/the-end-of-humanity',
                    'part3/chapter8/chapter8-solutions',
                ],
            },
        ],
    },
    'conclusion',
  ],
};

export default sidebars;
