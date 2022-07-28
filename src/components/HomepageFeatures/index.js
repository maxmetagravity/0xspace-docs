import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        0xSPACE 是基于Web-Based Metaverse基于Web3、WebXR的元宇宙， 易于使用，自主搭建、开放共赢、是启动您元宇宙的不二之选.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        聚焦在基于浏览器的 WebXR 标准，提供全面的VR虚拟现实体验，兼容Ocluse、Pico等主流VR虚拟现实设备.
      </>
    ),
  },
  {
    title: 'Powered by 0xSPACE',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        0xSPACE 灵境元宇宙平台，将你的线上业务扩展到元宇宙，对接虚拟空间建设、扩展虚拟社交、助力您实现新一代的数字经济模式
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
