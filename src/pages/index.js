import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import gsap from 'gsap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import useScroll from '../hooks/useScroll';
import useSectionsSwitcher from '../hooks/useSectionsSwitcher';
import { media } from '../styles/media';
import useWindowSize from '../hooks/useWindowSize';

const IndexPage = () => {
  useSectionsSwitcher();

  const [isReachedBreakpoint, setIsReachedBreakpoint] = useState(false);
  const { scrollY } = useScroll();
  const { leftSectionWith } = useSelector((state) => state.dimensions);
  const { isDesktop } = useWindowSize();

  const blockTitle = (el) => {
    gsap.set(el, { position: 'absolute', top: `calc(${scrollY}px + 40vw)` });
  };
  const unblockTitle = (el) => {
    gsap.set(el, { position: 'fixed', top: '40vw' });
  };
  const hideSocial = (el) => {
    gsap.to(el, { y: '100%' });
  };
  const showSocial = (el) => {
    gsap.to(el, { y: 0 });
  };

  useEffect(() => {
    const fixedTitle = document.querySelector('#fixedTitle');
    const socialDesktop = document.querySelector('#socialDesktop');
    const aboutSection = document.querySelector('#about');
    const titleBreakpoint = aboutSection.offsetTop;

    if (scrollY > titleBreakpoint && !isReachedBreakpoint) {
      setIsReachedBreakpoint(true);
      blockTitle(fixedTitle);
      hideSocial(socialDesktop);
    } else if (scrollY < titleBreakpoint && isReachedBreakpoint) {
      setIsReachedBreakpoint(false);
      unblockTitle(fixedTitle);
      showSocial(socialDesktop);
    }
  }, [scrollY]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {isDesktop && (
        <FixedTitle id='fixedTitle' imageHeight={leftSectionWith}>
          PORTFOLIO
        </FixedTitle>
      )}

      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
};

const FixedTitle = styled.h2`
  font-size: 13vw;
  line-height: 1em;
  position: absolute;
  right: calc(${(props) => props.theme.innerSpace} + 0.8em);
  top: calc(${(props) => props.imageHeight}px + 5vw);
  transform: rotate(-90deg) translateX(100%);
  transform-origin: 100% 0;

  ${media.sm`
    top: 38vw;
    left: calc(40vw + 0.4em);
    position: fixed;
    z-index: 999;
    line-height: 1em;
    transform: rotate(-90deg);
    transform-origin: 0 100%;
    font-size: 6vw;
  `};
`;

export default IndexPage;
