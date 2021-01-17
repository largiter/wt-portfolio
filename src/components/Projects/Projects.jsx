import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Link from 'next/link';
import Section from '../Genelal/Section';
import Project from './Project';
import { media } from '../../styles/media';
import useWindowSize from '../../hooks/useWindowSize';

const Projects = () => {
  const { isDesktop } = useWindowSize();
  const sectionImage = {
    mobile: '/assets/images/bg2.png',
    desktop: '/assets/images/cover1.png',
  };

  const projects = [
    {
      url: 'projects/earthly',
      name: 'NASK',
      image: '/assets/images/projects-main/project-mini-nask.jpg',
      category: 'Web application',
      desc:
        'Creating an e-learning platform with interactive games where students can be educated (through entertainment) about topics related to cyber security.',
    },
    {
      url: 'projects/nask',
      name: 'Earthly',
      image: '/assets/images/projects-main/project-mini-earthly.jpg',
      category: 'Mobile application',
      desc:
        'An eco-habit tracker application that helps you monitor your eco-friendly habits, tracks your impact on the planet and educates on preventing environmental pollution.',
    },
    {
      name: 'FLOWERELLE3',
      image: '/assets/images/projects-main/p2.png',
      category: 'Lorem ipsum',
      desc:
        'An eco-habit tracker application that helps you monitor your eco-friendly habits, tracks your impact on the planet and educates on preventing environmental pollution.',
    },
  ];
  return (
    <Section
      id='projects'
      title='Projects'
      image={isDesktop ? sectionImage.desktop : sectionImage.mobile}
      isLight
    >
      <ProjectsWrapper>
        <AllProjects>
          {projects.map(({ name, image, desc, category, url }, index) => (
            <Project
              key={name}
              image={image}
              title={name}
              category={category}
              desc={desc}
              index={index + 1}
              projectUrl={undefined}
            />
          ))}
        </AllProjects>
      </ProjectsWrapper>
    </Section>
  );
};

const ProjectsWrapper = styled.div``;
const AllProjects = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-gap: 3em;

  ${media.md`
    grid-gap: 6em;
  `};
`;

export default Projects;
