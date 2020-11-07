import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Navigation = ({ isNavVisible }) => {
  const [tlNav] = useState(gsap.timeline({ paused: true }));
  const navigationRef = useRef(null);
  const isInitialRun = useRef(true);

  useEffect(() => {
    const navigationWrapper = navigationRef.current;
    gsap.set(navigationWrapper, { autoAlpha: 0 });

    tlNav.set(navigationWrapper, { autoAlpha: 0 });
    tlNav.set(navigationWrapper, { autoAlpha: 1 });
    tlNav.to(navigationWrapper, { duration: 0.6, x: 0 });
  }, [tlNav]);

  useEffect(() => {
    if (isInitialRun.current) {
      isNavVisible ? tlNav.play() : tlNav.reverse();
    } else {
      isInitialRun.current = true;
    }
  }, [isNavVisible, tlNav]);

  return (
    <NavigationWrapper ref={navigationRef}>
      <NavigationItem>
        <a href="#About_me">About Me</a>
      </NavigationItem>
      <NavigationItem>
        <a href="#Projects">Projects</a>
      </NavigationItem>
      <NavigationItem>
        <a href="#Contact">Contact</a>
      </NavigationItem>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  z-index: 990;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-gap: 3em;
  grid-auto-rows: min-content;
  place-content: center;
  text-align: center;
  transform: translateX(-100%);
`;
const NavigationItem = styled.h2`
  font-weight: 100;
  font-size: calc(1vh + 2.5em);
  color: ${props => props.theme.color.burgundy};
`;

export default Navigation;
