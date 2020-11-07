import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavLink from '../Button/NavLink';

const Contact = () => {
  const test = 1;
  const { leftSectionWidth } = useSelector((state) => state.dimensions);
  return (
    <SectionWrapper>
      <ContactWrapper leftSectionWidth={leftSectionWidth} id='contact'>
        <ContactTop>
          For collaboration or to say hi,{' '}
          <span className='marker'>contact me:</span>
        </ContactTop>
        <Email
          href='mailto:victoriatruong16@gmail.com'
          text='victoriatruong16@gmail.com'
        />
      </ContactWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  background: ${(props) => props.theme.color.burgundy};
  margin-top: -7vmin;
`;
const ContactWrapper = styled.div`
  margin-left: ${(props) => props.leftSectionWidth}px;
  padding-bottom: ${(props) => props.theme.innerSpace};
  padding-left: ${(props) => props.theme.innerSpace};
`;
const ContactTop = styled.p`
  font-size: 1.6em;
  margin-bottom: 0 !important;
`;
const Email = styled(NavLink)`
  font-family: 'Playfair Display', sans-serif;
  font-size: 3.5em;
  font-weight: 700;
`;

export default Contact;
