import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

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
      </main>
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
              <img src="/img/docusaurus.png" alt="Author Photo" className={styles.authorPhoto} />
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
