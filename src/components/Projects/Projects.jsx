import React, { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Section from '../Genelal/Section';
import Project from './Project';
import { media } from '../../styles/media';

const Projects = () => {
  const projects = [
    {
      name: 'FLOWERELLE',
      image: '/assets/images/projects-main/p2.png',
      desc: 'Lorem ipsum',
    },
    {
      name: 'FLOWERELLE2',
      image: '/assets/images/projects-main/p2.png',
      desc: 'Lorem ipsum',
    },
    {
      name: 'FLOWERELLE3',
      image: '/assets/images/projects-main/p2.png',
      desc: 'Lorem ipsum',
    },
  ];
  return (
    <Section
      id='projects'
      title='Projects'
      image='/assets/images/cover1.png'
      isLight
    >
      <ProjectsWrapper>
        <AllProjects>
          {projects.map(({ name, image, desc }, index) => (
            <Project
              key={name}
              image={image}
              title={name}
              desc={desc}
              index={index + 1}
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
