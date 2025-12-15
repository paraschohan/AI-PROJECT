import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e0d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b78'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '246'),
            routes: [
              {
                path: '/docs/conclusion',
                component: ComponentCreator('/docs/conclusion', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter1/a-brief-history-of-physical-ai',
                component: ComponentCreator('/docs/part1/chapter1/a-brief-history-of-physical-ai', '1a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter1/what-is-physical-ai',
                component: ComponentCreator('/docs/part1/chapter1/what-is-physical-ai', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter1/why-is-physical-ai-important',
                component: ComponentCreator('/docs/part1/chapter1/why-is-physical-ai-important', '3ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter2/control-systems',
                component: ComponentCreator('/docs/part1/chapter2/control-systems', '52e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter2/machine-learning-for-physical-systems',
                component: ComponentCreator('/docs/part1/chapter2/machine-learning-for-physical-systems', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter2/sensors-and-actuators',
                component: ComponentCreator('/docs/part1/chapter2/sensors-and-actuators', 'd34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter3/embodied-cognition',
                component: ComponentCreator('/docs/part1/chapter3/embodied-cognition', 'e8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1/chapter3/morphological-computation',
                component: ComponentCreator('/docs/part1/chapter3/morphological-computation', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter4/robotics',
                component: ComponentCreator('/docs/part2/chapter4/robotics', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter4/smart-materials',
                component: ComponentCreator('/docs/part2/chapter4/smart-materials', '7c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter4/wearable-technology',
                component: ComponentCreator('/docs/part2/chapter4/wearable-technology', 'd99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter5/programmable-matter',
                component: ComponentCreator('/docs/part2/chapter5/programmable-matter', '2ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter5/responsive-architectures',
                component: ComponentCreator('/docs/part2/chapter5/responsive-architectures', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter5/self-healing-materials',
                component: ComponentCreator('/docs/part2/chapter5/self-healing-materials', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter6/brain-computer-interfaces',
                component: ComponentCreator('/docs/part2/chapter6/brain-computer-interfaces', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter6/exoskeletons-and-prosthetics',
                component: ComponentCreator('/docs/part2/chapter6/exoskeletons-and-prosthetics', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2/chapter6/haptic-interfaces',
                component: ComponentCreator('/docs/part2/chapter6/haptic-interfaces', '04f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter7/chapter7-solutions',
                component: ComponentCreator('/docs/part3/chapter7/chapter7-solutions', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter7/ethical-considerations',
                component: ComponentCreator('/docs/part3/chapter7/ethical-considerations', 'cd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter7/job-displacement',
                component: ComponentCreator('/docs/part3/chapter7/job-displacement', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter7/privacy-and-surveillance',
                component: ComponentCreator('/docs/part3/chapter7/privacy-and-surveillance', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter8/chapter8-solutions',
                component: ComponentCreator('/docs/part3/chapter8/chapter8-solutions', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter8/the-end-of-humanity',
                component: ComponentCreator('/docs/part3/chapter8/the-end-of-humanity', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter8/the-future-of-human-ai-collaboration',
                component: ComponentCreator('/docs/part3/chapter8/the-future-of-human-ai-collaboration', 'e23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3/chapter8/the-singularity-and-beyond',
                component: ComponentCreator('/docs/part3/chapter8/the-singularity-and-beyond', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/physical-ai/ai-safety',
                component: ComponentCreator('/docs/physical-ai/ai-safety', 'f69'),
                exact: true
              },
              {
                path: '/docs/physical-ai/conclusion',
                component: ComponentCreator('/docs/physical-ai/conclusion', 'cea'),
                exact: true
              },
              {
                path: '/docs/physical-ai/intro',
                component: ComponentCreator('/docs/physical-ai/intro', '740'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
