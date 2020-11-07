import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Hamburger = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');

    isNavVisible ? body.classList.add('navVisible') : body.classList.remove('navVisible');
  }, [isNavVisible]);

  return (
    <>
      <HamburgerWrapper onClick={() => setIsNavVisible(!isNavVisible)} ref={hamburgerRef}>
        {[...Array(3)].map((_, index) => (
          <Stripe key={index} isNavVisible={isNavVisible} />
        ))}
      </HamburgerWrapper>

      <Navigation isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />
    </>
  );
};

const hamburgerSize = '2.5rem';

const HamburgerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 1em;
  right: calc(${props => props.theme.innerSpace} / 2);
  transform: translateX(calc(${hamburgerSize} / 2));
  height: ${hamburgerSize};
  width: ${hamburgerSize};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Stripe = styled.div`
  height: 0.2rem;
  width: 100%;
  background: ${props => (props.isNavVisible ? props.theme.color.burgundy : props.theme.color.white)};

  &:nth-child(2) {
    width: 70%;
    transform: translateY(-50%);
  }
`;

export default Hamburger;
