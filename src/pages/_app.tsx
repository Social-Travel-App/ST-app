import type { AppProps } from 'next/app'
import { EmotionCache, ThemeProvider } from '@emotion/react'
import {
  CacheProvider,
  ThemeProvider as MuiThemeProvider,
} from '@emotion/react'
import createEmotionCache from '../utils/helper'
import muiTheme from '../styles/mui-theme'
import React from 'react'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import emotionTheme from '@/styles/emotion-theme'
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={emotionTheme}>
          <Component {...pageProps} />;
        </ThemeProvider>
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
