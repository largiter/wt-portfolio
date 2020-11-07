import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Link from 'next/link';

const Project = ({ image, title, desc, index }) => {
  const [tlShowDesc] = useState(gsap.timeline({ paused: true }));
  const projectUrl = '/projects/1';

  const sectionRef = useRef(null);
  const descRef = useRef(null);
  const imgWrapperRef = useRef(null);
  const additionalRef = useRef(null);

  const slideAdditionalOnScroll = () => {
    const additional = additionalRef.current;
    const imageWrapper = sectionRef.current.querySelector('.imageWrapper');

    gsap.from(additional, {
      scrollTrigger: {
        trigger: additional,
        start: 'bottom bottom',
      },
      x: `150%`,
      duration: 1,
      ease: 'power3',
    });

    gsap.from(additional.children, {
      scrollTrigger: {
        trigger: additional,
        start: 'bottom bottom',
      },
      delay: 1,
      opacity: 0,
      y: 20,
      duration: 1,
    });

    gsap.from(imageWrapper, {
      scrollTrigger: {
        trigger: imageWrapper,
        start: 'top bottom',
      },
      opacity: 0,
      duration: 1.4,
    });
  };

  const showProjectTextOnHover = () => {
    tlShowDesc.from(descRef.current, { opacity: 0, y: 20 });
  };

  useEffect(() => {
    slideAdditionalOnScroll();
    showProjectTextOnHover();
  }, []);

  useEffect(() => {
    const imgWrapper = imgWrapperRef.current;

    const showDesc = () => tlShowDesc.play();
    const hideDesc = () => tlShowDesc.reverse();

    imgWrapper.addEventListener('mouseover', showDesc);
    imgWrapper.addEventListener('mouseleave', hideDesc);

    return () => {
      imgWrapper.removeEventListener('mouseover', showDesc);
      imgWrapper.removeEventListener('mouseleave', hideDesc);
    };
  }, []);

  return (
    <ProjectWrapper className='dupa' ref={sectionRef}>
      <Link href={projectUrl}>
        <ImageWrapper className='imageWrapper' ref={imgWrapperRef}>
          <ProjectImage src={image} />
          <Desc ref={descRef}>{desc}</Desc>
        </ImageWrapper>
      </Link>
      <Additional ref={additionalRef}>
        <div>
          <AppName>{title}</AppName>
          <CategoryName>Web application</CategoryName>
        </div>
        <Link href={projectUrl}>
          <ReadMore>Read more</ReadMore>
        </Link>
      </Additional>
      <Index>0{index}</Index>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  margin-bottom: 4em;
  position: relative;
`;
const ImageWrapper = styled.div`
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;
const ProjectImage = styled.img`
  height: auto;
  object-fit: contain;
  width: 100%;
`;
const Desc = styled.p`
  align-items: flex-end;
  bottom: 0;
  color: ${(props) => props.theme.color.burgundy};
  display: flex;
  font-size: 1.3em;
  height: 100%;
  left: 0;
  line-height: 1.4;
  padding: 2em;
  position: absolute;
  width: 100%;

  &::before {
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Additional = styled.div`
  align-items: center;
  color: ${(props) => props.theme.color.white};
  display: grid;
  grid-template-columns: 2fr auto;
  padding: 2em ${(props) => props.theme.innerSpace} 2em 2em;
  position: relative;
  transform: translateX(${(props) => props.theme.innerSpace});

  & > * {
    position: relative;
  }

  &::before {
    background: ${(props) => props.theme.color.burgundy};
    bottom: 0;
    content: '';
    height: 190%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
const ReadMore = styled.p`
  border: 1px solid ${(props) => props.theme.color.white};
  color: inherit;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0.8em 1.5em;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.burgundy};
  }
`;
const AppName = styled.h3``;
const CategoryName = styled.p``;
const Index = styled.div`
  bottom: -5vmin;
  color: ${(props) => props.theme.color.burgundyLight};
  font-size: 6em;
  left: 1vmin;
  position: absolute;
`;

export default Project;
