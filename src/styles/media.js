import { css } from 'styled-components';

export const breakpoints = {
  xs: 480,
  sm: 825,
  md: 992,
  lg: 1200,
  xl: 1400,
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
