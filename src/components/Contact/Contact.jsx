import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { media } from '../../styles/media';
import { fluidFontSize } from '../../styles/typography';
import NavLink from '../Button/NavLink';

const Contact = () => {
  const test = [1, 2, 3];
  const { leftSectionWidth } = useSelector((state) => state.dimensions);
  return (
    <SectionWrapper>
      <ContactWrapper leftSectionWidth={leftSectionWidth} id='contact'>
        <ContactTop>
          For collaboration or to say hi,{' '}
          <span className='marker'>contact me:</span>
        </ContactTop>
        <Email href='mailto:victoriatruong16@gmail.com'>
          <span>victoriatruong16</span>
          <span>@gmail.com</span>
        </Email>
      </ContactWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  background: ${(props) => props.theme.color.burgundy};
  margin-top: -7vmin;
`;
const ContactWrapper = styled.div`
  padding-bottom: ${(props) => props.theme.innerSpace};
  padding-left: ${(props) => props.theme.innerSpace};
  padding-right: ${(props) => props.theme.innerSpace};

  ${media.sm`
    margin-left: ${(props) => props.leftSectionWidth}px;
    padding-bottom: 5em;
    padding-left: 5em;
    padding-right: 5em;
  `}

  ${media.xl`
    margin-left: ${(props) => props.leftSectionWidth}px;
    padding-bottom: ${(props) => props.theme.innerSpace};
    padding-left: ${(props) => props.theme.innerSpace};
    padding-right: ${(props) => props.theme.innerSpace};
  `}
`;
const ContactTop = styled.p`
  /* font-size: 1.6em; */
  margin-bottom: 1em;
  ${fluidFontSize(20, 25, 200, 1600)};
`;
const Email = styled.a`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Playfair Display', sans-serif;
  ${fluidFontSize(30, 45, 200, 1600)};
  font-weight: 700;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
`;

export default Contact;
