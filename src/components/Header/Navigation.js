import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { fluidFontSize } from '../../styles/typography';
import { requestSection } from '../../store/dimensions/dimensions.action';

const Navigation = ({ isNavVisible, setIsNavVisible }) => {
  const [tlNav] = useState(gsap.timeline({ paused: true }));
  const navigationRef = useRef(null);
  const isInitialRun = useRef(true);

  const dispatch = useDispatch();
  const { currentSection } = useSelector((state) => state.dimensions);
  const goToSection = (sectionId) => {
    dispatch(requestSection(sectionId));
    setIsNavVisible(false);
  };

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
        <a onClick={() => goToSection('about')}>About me</a>
      </NavigationItem>
      <NavigationItem>
        <a onClick={() => goToSection('projects')}>Projects</a>
      </NavigationItem>
      <NavigationItem>
        <a onClick={() => goToSection('contact')}>Contact</a>
      </NavigationItem>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  background: #fff;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 3em;
  height: 100vh;
  left: 0;
  place-content: center;
  position: fixed;
  text-align: center;
  top: 0;
  transform: translateX(-100%);
  width: 100vw;
  z-index: 990;
`;
const NavigationItem = styled.h2`
  color: ${(props) => props.theme.color.burgundy};
  cursor: pointer;
  font-weight: 100;

  & > a {
    ${fluidFontSize(50, 70, 200, 1600)};
  }
`;

export default Navigation;
