import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Section from '../Genelal/Section';
import LineSeparator from '../Genelal/LineSeparator';
import NavLink from '../Button/NavLink';

const About = () => (
  <Section id='about' title='About me' image='/assets/images/bg3.png'>
    <AboutContent>
      <AuthorPhoto src='/assets/images/autor-image.jpg' />
      <AboutText>
        <Title>
          I’m a <span className='marker'>UX designer</span>
          <br /> and future psychologist
          <br /> based in Krakow, Poland.
        </Title>
        <p>
          Obsessed with analysing the human behaviour and exploring the most
          beautiful and fascinating machine on earth - the human brain.
        </p>
        <p>
          I decided to combine my <strong>psychology knowledge</strong> and
          passion for listening to people’s stories with my huge need for{' '}
          <strong>creating solutions</strong>. When I am not designing , I am
          travelling. You can find me wondering around art galleries or at home
          watering and taking care of my quite enormous plant collection.
        </p>
      </AboutText>
    </AboutContent>
  </Section>
);

const ProjectsWrapper = styled(Section)``;
const AboutContent = styled.div``;
const AuthorPhoto = styled.img`
  height: auto;
  max-width: 100%;
  padding-left: 10em;
`;
const Title = styled.h3`
  font-size: 3em;
`;
const AboutText = styled.div`
  position: relative;
  top: -2em;

  p {
    margin-bottom: 2em;
    margin-top: 2em;
  }
`;
const Contact = styled.div`
  margin-top: 6em;
`;
const ContactTop = styled.p`
  font-size: 1.6em;
  margin-bottom: 0 !important;
`;
const Email = styled(NavLink)`
  font-size: 3em;
  font-weight: 900;
`;

export default About;
