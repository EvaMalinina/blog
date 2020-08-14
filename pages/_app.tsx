import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
      <Component {...pageProps} />
    </>
  )
}
