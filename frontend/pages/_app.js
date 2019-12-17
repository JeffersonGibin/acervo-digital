import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Head from 'next/head'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    background: #f7f7f7;
  }

  button {
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    border-color: #ebebeb;
    color: #736d6d;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    color: #fff!important;
    margin: 5px 15px 5px 0px;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Acervo Digital</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
