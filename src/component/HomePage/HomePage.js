import React from 'react'
import EducationPost from '../HomeComponent/EducationPost/EducationPost';
import Footer from '../HomeComponent/Footer/Footer';
import Header from '../HomeComponent/Header/Header';
import Hero from '../HomeComponent/Hero/Hero';
import Partners from '../HomeComponent/Partners/Partners';
import Testimony from '../HomeComponent/Testimony/Testimony';



function HomePage() {
  return (
  <>
    <Header />
    <Hero />
    <Partners />
    <EducationPost />
    <Testimony />
    <Footer />

</>
  )
}

export default HomePage