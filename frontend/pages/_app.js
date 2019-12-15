import App from 'next/app'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

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
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    console.log(pageProps)
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle/>
      </ThemeProvider>
    )
  }
}
