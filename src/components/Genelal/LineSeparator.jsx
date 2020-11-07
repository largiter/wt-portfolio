import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

const LineSeparator = () => <Line />;

const Line = styled.div`
  background: ${(props) => props.theme.color.white};
  height: 1.5px;
  margin: 1.5em auto 1em 0;
  width: 25%;

  ${media.md`
    margin: 3em auto 1.5em 0;
  `};
`;

export default LineSeparator;
