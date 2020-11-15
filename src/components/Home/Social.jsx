import React from 'react';
import styled from 'styled-components';
// import behance from '../../images/behance.svg';
// import dribbble from '../../images/dribbble.svg';
// import instagram from '../../images/instagram.svg';

const Social = () => (
  <SocialWrapper>
    <IconWrapper href='behance.pl'>
      <Icon src='/assets/behance.svg' />
    </IconWrapper>

    <IconWrapper href='behance.pl'>
      <Icon src='/assets/dribbble.svg' />
    </IconWrapper>

    <IconWrapper href='behance.pl'>
      <Icon src='/assets/instagram.svg' />
    </IconWrapper>
  </SocialWrapper>
);

const iconSize = '4rem';

const SocialWrapper = styled.aside`
  bottom: 0;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 1.5rem;
  margin-bottom: calc(${(props) => props.theme.innerSpace} / 2);
  position: fixed;
  right: calc(${(props) => props.theme.innerSpace} / 2);
  transform: translateX(calc(${iconSize} / 2));
  z-index: 999;
`;
const IconWrapper = styled.a`
  align-items: center;
  background: ${(props) => props.theme.color.burgundyLight};
  border-radius: 50%;
  display: flex;
  height: ${iconSize};
  justify-content: center;
  width: ${iconSize};

  &:hover {
    background: ${(props) => props.theme.color.burgundy};
    border: 1px solid ${(props) => props.theme.color.pink};
  }
`;
const Icon = styled.img`
  height: inherit;
  padding: 0.7rem;
  transition: 0.4s;
  width: inherit;
`;

export default Social;
