import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <span>Illustrations & Web Design by</span>
      <a href='linkedin.pl'>
        <strong> Wiktoria Truong</strong>
      </a>{' '}
      <Rights>© All rights reserved</Rights>
    </FooterContent>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background: ${(props) => props.theme.color.burgundyLight};
  opacity: 0.95;
  position: relative;
  z-index: 898;
`;
const FooterContent = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 ${(props) => props.theme.innerSpace};
  padding: 1em 0;
  text-align: center;

  & > * {
    white-space: nowrap;
  }
`;
const Rights = styled.span`
  ${media.md`
    margin-left: 2em;
  `}
`;

export default Footer;
