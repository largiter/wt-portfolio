import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavLink from '../Button/NavLink';

const SocialDesktop = ({ width }) => (
  <Wrapper id='socialDesktop' width={width}>
    <NavLink href='linkedin.pl' text='linkedin' />
    <NavLink href='dibble.pl' text='dribbble' />
    <NavLink href='behence.pl' text='behance' />
  </Wrapper>
);

const Wrapper = styled.nav`
  background: ${(props) => props.theme.color.burgundyLight};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 1.5em;
  position: fixed;
  width: ${(props) => props.width}px;
  z-index: 998;
`;

export default SocialDesktop;
