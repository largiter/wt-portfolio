import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useDispatch, useSelector } from 'react-redux';
import { breakpoints } from '../../styles/media';

import Hamburger from '../Header/Hamburger';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopHeader from '../Header/DesktopHeader';
import useIsClient from '../../hooks/useIsClient';
import useScroll from '../../hooks/useScroll';
import SocialDesktop from '../Home/SocialDesktop';
import Social from '../Home/Social';
import { setDimension } from '../../store/dimensions/dimensions.action';
import { DIMENSIONS_KEYS } from '../../store/dimensions/dimensions.keys';
import useSectionsSwitcher from '../../hooks/useSectionsSwitcher';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { leftSectionWidth } = useSelector((state) => state.dimensions);
  const { isLoaded } = useSelector((state) => state.dimensions);
  const { windowWidth, isDesktop } = useWindowSize();
  const isClient = useIsClient();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setDimension(DIMENSIONS_KEYS.isLoaded, true));
    }, 1000);
  }, []);

  return (
    <LayoutWrapper>
      {windowWidth > breakpoints.sm ? <DesktopHeader /> : <Hamburger />}
      {children}
      {isDesktop ? <SocialDesktop width={leftSectionWidth} /> : <Social />}
      <Footer />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default Layout;
