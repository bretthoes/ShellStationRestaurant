import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
}
 
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>The Station Restaurant</title>
        <meta name="description" content="The Station Restaurant" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}