import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import gsap from 'gsap';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import useScroll from '../hooks/useScroll';
import useSectionsSwitcher from '../hooks/useSectionsSwitcher';

const IndexPage = () => {
  useSectionsSwitcher();

  const [isReachedBreakpoint, setIsReachedBreakpoint] = useState(false);
  const { scrollY } = useScroll();

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
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
};

export default IndexPage;
