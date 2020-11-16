import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { media } from '../../styles/media';
import { setDimension } from '../../store/dimensions/dimensions.action';
import { DIMENSIONS_KEYS } from '../../store/dimensions/dimensions.keys';
import useWindowSize from '../../hooks/useWindowSize';
import useScroll from '../../hooks/useScroll';
import { sections } from '../../store/dimensions/sections.keys';

const Section = ({
  children,
  forwardedRef,
  id,
  title,
  image,
  isLight = false,
  isHome = false,
}) => {
  const imageRef = useRef(null);
  const sectionWrapperRef = useRef(null);
  const dispatch = useDispatch();

  const getLink = (text) => text.replace(/ /g, '_');

  const [imageHeight, setImageHeight] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const { windowWidth, isDesktop } = useWindowSize();
  const [sectionAreas, setSectionAreas] = useState({
    start: undefined,
    end: undefined,
  });

  const getImageHeight = () => {
    if (!imageRef.current) return;
    setImageHeight(imageRef.current.offsetHeight);
    if (isHome) {
      const imgWidth = imageRef.current.offsetWidth;
      dispatch(setDimension(DIMENSIONS_KEYS.leftSectionWidth, imgWidth));
    }
  };

  const getSectionAreas = (ref) => {
    setSectionAreas({
      start: ref.offsetTop,
      end: ref.offsetTop + ref.offsetHeight,
    });
  };

  const checkIsTitle = () => {
    if (!title) return false;

    if (isHome && isDesktop) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    getImageHeight();
    getSectionAreas(sectionWrapperRef.current);
  }, [windowWidth]);

  useEffect(() => {
    const sectionWrapper = sectionWrapperRef.current;
    if (!sectionWrapper) return;

    const getTop = () => {
      setSectionTop(sectionWrapper.getBoundingClientRect().top);
      setSectionHeight(sectionWrapper.getBoundingClientRect().height);
    };

    getTop();
    window.addEventListener('scroll', getTop);

    return () => window.removeEventListener('scroll', getTop);
  }, []);

  return (
    <SectionWrapper ref={sectionWrapperRef} id={id}>
      <Curtain ref={forwardedRef} isLight={isLight} />
      <StyledImage ref={imageRef} src={image} alt='alt' />
      <Content>
        {checkIsTitle() && (
          <SectionTitle imageHeight={imageHeight} isLight={isLight}>
            {title}
          </SectionTitle>
        )}
        {children}
      </Content>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  overflow-x: hidden;
  padding-right: ${(props) => props.theme.innerSpace};
  position: relative;

  ${media.sm`
    display: grid;
    grid-template-columns: 40vw 1fr;
    padding-right: 0;
  `};
`;
const Curtain = styled.div`
  background: ${(props) =>
    props.isLight ? props.theme.color.pink : props.theme.color.burgundy};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;
const StyledImage = styled.img`
  height: auto;
  object-fit: cover;
  width: 100%;
`;
const SectionTitle = styled.h2`
  line-height: 1em;
  position: absolute;
  right: calc(${(props) => props.theme.innerSpace} + 0.6em);
  top: calc(${(props) => props.imageHeight}px + 6vw);
  transform: rotate(-90deg) translateX(100%);
  transform-origin: 100% 0;
  z-index: 900;

  ${media.sm`
    color: ${(props) =>
      props.isLight ? props.theme.color.burgundy : props.theme.color.white};
    position: relative;
    transform: initial;
    right: 0;
    top: 0;
    bottom: initial;
    margin-bottom: 1.5em;

    &::before {
      content: '';
      position: absolute;
      bottom: -0.4em;
      left: 0;
      width: 2em;
      height: 2px;
      background: ${(props) =>
        props.isLight ? props.theme.color.burgundy : props.theme.color.white};
    }
  `};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${(props) => props.theme.innerSpace};
  margin-right: 0;

  ${media.sm`
    margin: 5em;
  `};

  ${media.xl`
    margin: ${(props) => props.theme.innerSpace};
  `};
`;

export default Section;
