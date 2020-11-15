import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Hamburger = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const body = document.querySelector('body');

    isNavVisible
      ? body.classList.add('navVisible')
      : body.classList.remove('navVisible');
  }, [isNavVisible]);

  return (
    <>
      <HamburgerWrapper
        onClick={() => setIsNavVisible(!isNavVisible)}
        ref={hamburgerRef}
      >
        {[...Array(3)].map((_, index) => (
          <Stripe key={index} isNavVisible={isNavVisible} />
        ))}
      </HamburgerWrapper>

      <Navigation
        isNavVisible={isNavVisible}
        setIsNavVisible={setIsNavVisible}
      />
    </>
  );
};

const hamburgerSize = '2.5rem';

const HamburgerWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${hamburgerSize};
  justify-content: space-between;
  position: fixed;
  right: calc(${(props) => props.theme.innerSpace} / 2);
  top: 1em;
  transform: translateX(calc(${hamburgerSize} / 2));
  width: ${hamburgerSize};
  z-index: 999;
`;
const Stripe = styled.div`
  background: ${(props) =>
    props.isNavVisible ? props.theme.color.burgundy : props.theme.color.white};
  height: 0.2rem;
  width: 100%;

  &:nth-child(2) {
    transform: translateY(-50%);
    width: 70%;
  }
`;

export default Hamburger;
