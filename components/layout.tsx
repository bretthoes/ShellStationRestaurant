import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'
import Banner from './banner'
import BannerImage from '../public/BannerImage.jpg'

interface LayoutProps {
  children: ReactNode
}
 
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>The Station</title>
        <meta name="description" content="The Station Restaurant" />
      </Head>
      <Navbar />
      <Banner imageUrl={BannerImage.src} altText="Banner Image" />
      <main>{children}</main>
      <Footer />
    </>
  )
}