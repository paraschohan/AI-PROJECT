import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import PhysicalAIChatbot from '../components/Chatbot/PhysicalAIChatbot';

const KeyFeaturesList = [
  {
    title: 'Part 1: The Foundations of Physical AI',
    description: (
      <>
        <strong>Explore the fundamental principles that underpin Physical AI, from control systems to embodied cognition.</strong>
      </>
    ),
    link: '/docs/part1/chapter1/what-is-physical-ai',
  },
  {
    title: 'Part 2: Applications and Implications',
    description: (
      <>
        <strong>Discover the real-world applications of Physical AI, including robotics, smart materials, and responsive architectures.</strong>
      </>
    ),
    link: '/docs/part2/chapter4/robotics',
  },
  {
    title: 'Part 3: The Future of Human-AI Collaboration',
    description: (
      <>
        <strong>Delve into the future of human-AI interaction, ethical considerations, and the potential societal impact.</strong>
      </>
    ),
    link: '/docs/part3/chapter7/ethical-considerations',
  },
];

function Feature({title, description, link, idx}) {
  return (
    <div className={clsx('col col--4', `feature-card-${idx + 1}`)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p style={{ color: 'black' }}>{description}</p>
        <Link
          className="button button--secondary button--md"
          to={link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

function BookMockup() {
    return (
      <div className={styles.bookMockup}>
        <div className={styles.bookCover}>
          <div className={styles.bookSpine}></div>
          <div className={styles.bookTitle}>Physical-AI</div>
          <div className={styles.bookAuthor}>An Exploration</div>
        </div>
      </div>
    );
  }

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroText}>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
            <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Start Reading Now
            </Link>
            </div>
        </div>
        <div className={styles.heroImage}>
            <BookMockup />
        </div>
      </div>
    </header>
  );
}

function QuoteSection() {
    return (
      <div className={styles.quoteSection}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <blockquote className={styles.quote}>
              "The line between the physical and digital worlds is blurring, and Physical AI is the bridge."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }

function BlurbSection() {
  return (
    <div className={styles.blurbSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <p className={styles.blurbText}>
              This book is a comprehensive exploration of Physical AI, a field that merges artificial intelligence with the physical world. From smart materials to brain-computer interfaces, we delve into the technologies that are shaping our future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Physical AI: Where Intelligence Meets the Real World. An exploration of the intersection of artificial intelligence and the physical world.">
      <HomepageHeader />
      <main>
        <BlurbSection />
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {KeyFeaturesList.map((props, idx) => (
                <Feature key={idx} idx={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <QuoteSection />
        <AuthorBioSection />
        <EmailSignupSection />
        <CheatbotInfoSection />
      </main>
      <PhysicalAIChatbot />
    </Layout>
  );
}

function AuthorBioSection() {
  return (
    <div className={styles.authorBioSection}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.authorBioContent}>
              <img src="/img/ai-author.svg" alt="AI Author" className={styles.authorPhoto} />
              <div className={styles.authorText}>
                <Heading as="h2" className={styles.authorName}>About the Author</Heading>
                <p className={styles.authorDescription}>
                  This book is authored by a collective of AI researchers and futurists dedicated to exploring the profound implications of Physical AI on society, technology, and the future of human existence. Our mission is to demystify complex concepts and foster informed discussions about the ethical and practical challenges ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailSignupSection() {
  return (
    <div className={styles.emailSignupSection}>
      <div className="container text--center">
        <Heading as="h2" className={styles.emailSignupTitle}>Stay Updated</Heading>
        <p className={styles.emailSignupSubtitle}>Subscribe to our newsletter for the latest insights on Physical AI.</p>
        <form className={styles.emailSignupForm}>
          <input type="email" placeholder="Your email address" className={styles.emailInput} />
          <button type="submit" className="button button--primary button--lg">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

function CheatbotInfoSection() {
  return (
    <div className={styles.cheatbotInfoSection} style={{
      padding: '2rem 0',
      backgroundColor: '#f8fafc',
      marginTop: '2rem'
    }}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div style={{
              textAlign: 'center',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{ color: 'var(--ifm-color-primary)', marginBottom: '1rem' }}>Physical AI Cheatbot</h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                Need quick answers? Our <strong>Cheatbot</strong> is here to help!
                Click the robot icon at the bottom right to ask questions about Physical AI,
                robotics, brain-computer interfaces, smart materials, ethics, or any other topic.
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginTop: '1rem'
              }}>
                <div style={{
                  backgroundColor: '#eef2ff',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}>
                  <strong>🤖 Instant Help</strong><br/>Get answers in seconds
                </div>
                <div style={{
                  backgroundColor: '#e0f2fe',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}>
                  <strong>📚 Book Content</strong><br/>Based on the Physical AI book
                </div>
                <div style={{
                  backgroundColor: '#dcfce7',
                  padding: '0.8rem 1.2rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}>
                  <strong>💡 General Questions</strong><br/>Can answer any question
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
