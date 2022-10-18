import type { AppProps } from 'next/app'
import type { EmotionCache } from '@emotion/react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createEmotionCache from '../utils/helper'
import React from 'react'
import muiTheme from '../styles/mui-theme'
import Head from 'next/head'
import '../styles/globals.scss'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
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
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
