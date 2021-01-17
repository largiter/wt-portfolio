import React from 'react';
import styled from 'styled-components';

const Social = () => (
  <SocialWrapper>
    <IconWrapper target='_blank' href='https://behance.net/wiktoriatruong'>
      <Icon src='/assets/behance.svg' />
    </IconWrapper>

    <IconWrapper target='_blank' href='https://instagram.com/vic_ux'>
      <Icon src='/assets/instagram.svg' />
    </IconWrapper>

    <IconWrapper target='_blank' href='https://linkedin.com/in/wiktoria-truong'>
      <Icon src='/assets/linkedin.svg' />
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
