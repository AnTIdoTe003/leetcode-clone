import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        LeetCone
      </title>
      <meta  name='viewport' content='width=device-width, initial-scale-1'/>
      <meta name='description' content='A application built using NextJs13 and Typescript that contains leetcode problems and video solutions'/>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}
