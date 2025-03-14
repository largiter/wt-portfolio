import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import Social from './Social';
import useWindowSize from '../../hooks/useWindowSize';
import Section from '../Genelal/Section';
import { media } from '../../styles/media';
import LineSeparator from '../Genelal/LineSeparator';
import SocialDesktop from './SocialDesktop';

const Home = ({ fixedTitle }) => {
  const { windowHeight, isDesktop } = useWindowSize();
  const curtainRef = useRef(null);
  const wrapperRef = useRef(null);
  const [tlMain] = useState(gsap.timeline({ paused: true }));
  const initialHelloRef = useRef(null);

  const { isLoaded } = useSelector((state) => state.dimensions);

  const [imageHeight, setImageHeight] = useState(undefined);
  const [imageWidth, setImageWidth] = useState(undefined);

  const showHello = (element) => {
    const initialHelloChildren = element.querySelector('.letters').children;
    const childrenArr = Array.from(initialHelloChildren);
    childrenArr.forEach((child) => {
      tlMain.from(child, { duration: 0.5, y: '100%', ease: 'power2' }, '-=0.3');
    });
    tlMain.from(element, { duration: 0.5, scale: 1.6 }, '-=0.2');
  };

  useEffect(() => {
    if (!fixedTitle) return;

    const curtain = curtainRef.current;
    const wrapper = wrapperRef.current;
    const initialHello = wrapper.querySelector('#initialHello');
    const name = wrapper.querySelector('#name');
    const separator = wrapper.querySelector('#separator');
    const desc = wrapper.querySelector('#desc');

    tlMain.to('body', { duration: 1, opacity: 1 });
    tlMain.from(curtain, { duration: 2, x: '-100%' });
    tlMain.from(
      fixedTitle,
      { duration: 1.4, y: -curtain.offsetHeight - 400 },
      '-=2'
    );
    showHello(initialHello);
    tlMain.from(name, { y: '100%' });
    tlMain.from(separator, { y: '100%' }, '-=0.7');
    tlMain.from(desc, { y: '100%' }, '-=0.2');
  }, [fixedTitle]);

  useEffect(() => {
    if (isLoaded) {
      tlMain.play();
    }
  }, [tlMain, isLoaded]);

  return (
    <Section
      forwardedRef={curtainRef}
      image='/assets/images/bg1.png'
      windowHeight={windowHeight}
      isHome
      handleSetImageHeight={setImageHeight}
      handleSetImageWidth={setImageWidth}
      title='PORTFOLIO'
    >
      <Wrapper ref={wrapperRef}>
        <Title>
          <InitialHello id='initialHello' ref={initialHelloRef}>
            <HelloLetters className='letters'>
              {'HELLO.'.split('').map((letter, index) => (
                <div key={index}>{letter}</div>
              ))}
            </HelloLetters>
          </InitialHello>
          <br />
          <Name>
            <div id='name'>I'm Wiktoria</div>
          </Name>
        </Title>
        <Desc>
          <div id='desc'>
            <div id='separator'>
              <LineSeparator />
            </div>
            <p>
              <span>I share my time between exploring the</span>
              {isDesktop && <br />}
              <span className='marker'>human</span> brain and{' '}
              <span className='marker'>designing</span> products.
            </p>
          </div>
        </Desc>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  width: fit-content;
`;
const InitialHello = styled.div`
  font-size: 1.3em;
  overflow: hidden;
  position: absolute;
  transform-origin: 0 0;
`;
const HelloLetters = styled.span`
  display: inline-flex;
`;
const Title = styled.h1`
  font-weight: 200;
  width: fit-content;
`;
const Desc = styled.div`
  max-width: 45rem;
  overflow: hidden;

  ${media.sm`
      width: 100%;
  `};
`;
const Name = styled.div`
  font-size: 0.7em;
  overflow: hidden;
  padding-top: 1em;
`;

export default Home;
