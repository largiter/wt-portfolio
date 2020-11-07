import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      Illustrations & Web Design by{' '}
      <a href="linkedin.pl">
        <strong>Wiktoria Truong</strong>
      </a>{' '}
      <Rights>© All rights reserved</Rights>
    </FooterContent>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  position: relative;
  z-index: 1000;
  opacity: 0.95;
  background: ${(props) => props.theme.color.burgundyLight};
`;
const FooterContent = styled.p`
  margin: 0 ${(props) => props.theme.innerSpace};
  padding: 1em 0;
  text-align: center;
`;
const Rights = styled.span`
  margin-left: 2em;
`;

export default Footer;
