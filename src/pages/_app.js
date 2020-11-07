import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import configStore from '../store/configStore';
import GlobalStyle from '../styles/global';
import Theme from '../styles/theme';

const store = createStore(configStore);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
