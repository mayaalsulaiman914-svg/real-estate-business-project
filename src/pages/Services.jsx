import React from 'react'
import Section from '../components/Section/Section'
import Container from '../components/Container/Container'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import servicesData from '../data/ServiceCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'

const Services = () => {
  return (
    <div>
      <Section className="Unlock-Property-Value">
        <Container>
          <SectionHeading
          showDecoration={true}
          title="Unlock Property Value"
          description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey">
          </SectionHeading>
          <div className="services-cards">
          {servicesData.map((service)=> (
            <ServiceCard key={service.id} icon={service.icon} title={service.title}
            description={service.description} />
          ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Services
