import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Section from '../Section/Section'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'

const WebsiteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Section className='cta'>
      <div className='bg-left'><img src='/assets/img/Abstract Design-l.png' /></div>
      <div className='bg-right'><img src='/assets/img/Abstract Design-r.png' /></div>
      <div className='bg-left-sm'><img src='/assets/img/Abstract Design-l-sm.png' /></div>
      <div className='bg-right-sm'><img src='/assets/img/Abstract Design-r-sm.png' /></div>
      <Container>
              <SectionHeading title="Start Your Real Estate Journey Today" description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance." />
              <Button>Explore Properties</Button>
      </Container>
      </Section>
     <Footer />
    </>
  )
}

export default WebsiteLayout
