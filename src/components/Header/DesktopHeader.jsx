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
        text='PROJECTS'
        forceActive={currentSection === sections[0]}
      />
      <NavLink
        handleOnClick={() => goToSection('about')}
        text='ABOUT ME'
        forceActive={currentSection === sections[1]}
      />
      <NavLink
        handleOnClick={() => goToSection('contact')}
        text='CONTACT'
        forceActive={currentSection === sections[2]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.burgundy};
  color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  padding: 1em;
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100% - 40vw);
  z-index: 998;
`;

export default DesktopHeader;
