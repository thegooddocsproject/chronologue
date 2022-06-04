import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({children}) {
  return (
    <div>
        <Nav/>
        <Banner/>
        {children}
        <Footer/>
    </div>
  )
}
