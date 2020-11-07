import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavLink from '../Button/NavLink';

const SocialDesktop = ({ width }) => (
  <Wrapper id="socialDesktop" width={width}>
    <NavLink href="linkedin.pl" text="linkedin" />
    <NavLink href="dibble.pl" text="dribbble" />
    <NavLink href="behence.pl" text="behance" />
  </Wrapper>
);

const Wrapper = styled.nav`
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: ${(props) => props.width}px;
  background: ${(props) => props.theme.color.burgundyLight};
  padding: 1.5em;
  display: flex;
  justify-content: center;
`;

export default SocialDesktop;
