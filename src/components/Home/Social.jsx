import React from 'react';
import styled from 'styled-components';
// import behance from '../../images/behance.svg';
// import dribbble from '../../images/dribbble.svg';
// import instagram from '../../images/instagram.svg';

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
const IconWrapper = styled.a``;
const Icon = styled.img`
  background: ${(props) => props.theme.color.burgundyLight};
  border-radius: 50%;
  height: ${iconSize};
  padding: 0.5rem;
  transition: 0.4s;
  width: ${iconSize};

  &:hover {
    background: ${(props) => props.theme.color.burgundy};
    border: 1px solid ${(props) => props.theme.color.pink};
  }
`;

const Social = () => (
  <SocialWrapper>
    <IconWrapper href='behance.pl'>
      <Icon src='behance' />
    </IconWrapper>

    <IconWrapper href='behance.pl'>
      <Icon src='dribbble' />
    </IconWrapper>

    <IconWrapper href='behance.pl'>
      <Icon src='instagram' />
    </IconWrapper>
  </SocialWrapper>
);

export default Social;
