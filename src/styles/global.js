import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fluidFontSize, importFonts } from './typography';

const GlobalStyle = createGlobalStyle`
  ${importFonts}
  ${reset}

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}
  html {
    height: 100%;
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
  body {
    opacity: 0;
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Playfair Display', sans-serif;
    background-color: ${(props) => props.theme.color.pink};
    color: ${(props) => props.theme.color.white};
  }
  .navVisible {
  	overflow: hidden;
  }
  h1 {
    //font-size: calc(3.5vw + 1.5em);
    ${fluidFontSize(20, 80, 200, 1600)};
  }
  h1, h2, h3, p {
    margin: 0;
  }
  h2 {
    ${fluidFontSize(35, 70, 200, 1600)};
  	font-weight: 500;
  }
  h3 {
    font-size: calc(0.5vw + 1.4em);
    line-height: 1.6;
  }
  p, li, a {
  	font-family: 'Montserrat', sans-serif;
  	font-weight: 400;
  	line-height: 1.9;
    ${fluidFontSize(15, 17, 700, 1600)};
  }
  figure {
    margin: 0;
  }
  button {
    background: initial;
    border: initial;
  }
  textarea {
    resize: vertical;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  span {
    font-size: inherit;
    font-family: inherit;
  }
  img {
    display: block;
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
  .marker {
    background: ${(props) => props.theme.color.pink};
    color: ${(props) => props.theme.color.burgundy};
    padding: 0.1em 0.3em;
  }
  strong {
    font-weight: bold;
  }
`;

export default GlobalStyle;
