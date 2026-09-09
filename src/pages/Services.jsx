import React from 'react'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import servicesData from '../data/ServiceCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import ServiceCTA from '../components/ServiceCTA/ServiceCTA'
import servicesData2 from '../data/ServiceCard2'
import Hero from '../components/Hero/Hero'
import QuickServices from '../components/QuickServices/QuickServices'
import Smart from "../components/Smart/Smart";
const Services = () => {
  return (
    <div>
        <Hero
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        showStats = {false}
        >
          <QuickServices/>
      </Hero>
      <Section className="Unlock-Property-Value">
        <Container>
          <SectionHeading
          showDecoration={true}
          title="Unlock Property Value"
          description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey">
          </SectionHeading>
          <div className="services-cards">
          {servicesData.map((service)=> (
            <ServiceCard key={service.id}
                          icon={service.icon} 
                          title={service.title}
            description={service.description} />
          ))}
          <ServiceCTA
              className="services-cta"
              title="Unlock the Value of Your Property Today"
              description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
          />
          </div>
        </Container>
      </Section>
      <Section className="Effortless-Property">
        <Container>
          <SectionHeading
          showDecoration={true}
          title="Effortless Property Management"
          description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you">
          </SectionHeading>
          <div className="services-cards">
          {servicesData2.map((service)=> (
            <ServiceCard key={service.id}
                          icon={service.icon} 
                          title={service.title}
            description={service.description} />
          ))}
          <ServiceCTA
              className="services-cta"
              title="Experience Effortless Property Management"
              description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
          />
          </div>
        </Container>
      </Section>
      <Smart />
    </div>
  )
}

export default Services
