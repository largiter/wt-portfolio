import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

const SectionTop = ({ image, title }) => {
  const getLink = text => text.replace(/ /g, '_');

  return (
    <ImageWrapper id={getLink(title)}>
      <StyledImage src={image} alt="alt" />
      <SectionTitle>{title}</SectionTitle>
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.innerSpace};
`;
const StyledImage = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
`;
const SectionTitle = styled.h2`
  position: absolute;
  bottom: -0.8em;
  right: -0.3em;
  line-height: 1em;
  transform: translateX(100%) rotate(-90deg);
  transform-origin: 0 100%;

  ${media.sm`
      transform: initial;
      right: 0;
      top: 0;
      bottom: initial;
  `};
`;

export default SectionTop;
