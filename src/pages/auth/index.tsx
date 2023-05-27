import Head from 'next/head'
import React from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight:'500', subsets:['latin']})
const auth = () => {
  return (
    <>
    <Head>
    <title>Leetclone | Auth</title>
    </Head>
    <div className={` ${poppins.className}`}>
      auth
    </div>
    </>
    
  )
}

export default auth