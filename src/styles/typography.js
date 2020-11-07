import { css } from 'styled-components';

export const importFonts = css`
  @font-face {
    font-family: 'Playfair Display';
    src: url('/fonts/Playfair_Display/PlayfairDisplay-Medium.ttf');
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Bold.ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export const fluidFontSize = (
  minSize,
  maxSize,
  minViewport,
  maxViewport
) => css`
  font-size: calc(
    ${minSize}px + (${maxSize} - ${minSize}) *
      ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport}))
  );
`;
