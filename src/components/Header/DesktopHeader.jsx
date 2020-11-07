import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scroller } from 'react-scroll';
import styled from 'styled-components';
import { requestSection } from '../../store/dimensions/dimensions.action';
import { DIMENSIONS_KEYS } from '../../store/dimensions/dimensions.keys';
import { sections } from '../../store/dimensions/sections.keys';
import getSectionId from '../../utils/getSectionId';
import NavLink from '../Button/NavLink';

const DesktopHeader = () => {
  const dispatch = useDispatch();
  const { currentSection } = useSelector((state) => state.dimensions);
  const goToSection = (sectionId) => {
    dispatch(requestSection(sectionId));
  };

  return (
    <Wrapper>
      <NavLink
        handleOnClick={() => goToSection('projects')}
        text="PROJECTS"
        forceActive={currentSection === sections[0]}
      />
      <NavLink
        handleOnClick={() => goToSection('about')}
        text="ABOUT ME"
        forceActive={currentSection === sections[1]}
      />
      <NavLink
        handleOnClick={() => goToSection('contact')}
        text="CONTACT"
        forceActive={currentSection === sections[2]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.white};
  position: fixed;
  z-index: 999;
  right: 0;
  top: 0;
  padding: 1em;
  display: flex;
  background: ${(props) => props.theme.color.burgundy};
  width: calc(100% - 40vw);
  justify-content: center;
`;

export default DesktopHeader;
