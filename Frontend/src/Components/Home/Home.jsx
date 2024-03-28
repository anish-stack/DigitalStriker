import React from 'react'
import Hero from '../Hero/Hero'
import AboutHomePage from '../AboutHomePage/AboutHomePage'
import ServicesHomePage from '../ServicesHomePage/ServicesHomePage'
import Mission from '../Mission/Mission'
import ContactHome from '../contactHome/ContactHome'
import OurClient from '../OurClient/OurClient'

function Home() {
  return (
    <>
      <Hero />
      <AboutHomePage />
      <ServicesHomePage />
      <Mission />
      <ContactHome />
      <OurClient />
    </>
  )
}

export default Home
