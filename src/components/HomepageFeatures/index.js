import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The website is created from the ground up with an aim to make the 
        content more accessible and enable all learners to hit the ground
        running.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We strive to create a path for any aspiring learner, and help them understand
        the concepts easily. All the content is readily available on Github and 
        this website.
      </>
    ),
  },
  {
    title: 'Generated using SSGs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       The website is generated using Static Site Generators, and we
       are following the doc as code philosopy to make the content 
       much more universally accessible.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
