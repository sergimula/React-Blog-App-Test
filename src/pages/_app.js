import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Provider, Context } from '../store.js'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <Head>
          <title>Test Blog Post</title>
        </Head>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </div>
    )
  }
}
