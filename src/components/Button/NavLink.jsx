import gsap from 'gsap';
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { fluidFontSize } from '../../styles/typography';

const NavLink = ({ className, text, href, newTab = false, forceActive, handleOnClick }) => {
  const navItemRef = useRef(null);
  const [tlHover] = useState(gsap.timeline({ paused: true }));
  const isActiveRef = useRef(forceActive);

  useEffect(() => {
    isActiveRef.current = forceActive;
  }, [forceActive]);

  const hoverItem = () => {
    if (isActiveRef.current) return;
    tlHover.play();
  };

  const outHoverItem = () => {
    if (isActiveRef.current) return;
    tlHover.reverse();
  };

  useEffect(() => {
    const navItem = navItemRef.current;
    const line = navItem.querySelector('.line');

    gsap.set(line, { x: '-102%' });
    tlHover.to(line, { x: 0, duration: 0.4 });

    navItem.addEventListener('mouseover', hoverItem);
    navItem.addEventListener('mouseout', outHoverItem);

    return () => {
      navItem.removeEventListener('mouseover', hoverItem);
      navItem.removeEventListener('mouseout', outHoverItem);
    };
  }, []);

  useEffect(() => {
    if (forceActive) {
      tlHover.play();
    } else {
      tlHover.reverse();
    }
  }, [forceActive]);

  return (
    <NavItem
      onClick={handleOnClick}
      ref={navItemRef}
      className={className}
      href={href}
      target={newTab ? '_blank' : '_self'}
    >
      {text}
      <Line className="line" />
    </NavItem>
  );
};

const NavItem = styled.a`
  cursor: pointer;
  display: block;
  position: relative;
  overflow: hidden;
  margin-right: 8vw;
  ${fluidFontSize(14, 16, 300, 1600)};

  &:last-child {
    margin-right: 0;
  }

  &::after {
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
  }
`;
const Line = styled.div`
  content: '';
  width: 70%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.color.white};
  transition: 0.4s;
`;

export default NavLink;
