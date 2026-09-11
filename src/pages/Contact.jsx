import React, { useState } from 'react'
import Section from '../components/Section/Section'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Container from '../components/Container/Container'
import offices from '../data/OfficeCard.js'
import CardOffice from '../components/CardOffice/CardOffice.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'

const Contact = () => {
  const [activeFilter , setActiveFilter] = useState("all")
  const visibleOffices = (activeFilter === "all" ? offices.slice(0,2) : offices.filter((office) => office.type === activeFilter).slice(0,2)
  )
  return (
    <div>
      <Section className="connect" >
        <Container >
          <SectionHeading title="Let's Connect" description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need." showDecoration ={true} mobileEnd="Estatein" />
         <ContactForm />
        </Container>
      </Section>
      <Section className="office-location">
        <Container>
        <SectionHeading title="Discover Our Office Locations" description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you" showDecoration ={true} mobileEnd="team" />
         <div className="filter-btns">
          <div className="btns">
           <button className= {`btn ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")} >All</button>
           <button className={`btn ${activeFilter === "regional" ?  "active" : ""}`} onClick={() => setActiveFilter("regional")} >Regional</button>
           <button className={`btn ${activeFilter === "international" ? "active" : ""}`} onClick={() => setActiveFilter("international")} >International</button>
          </div>
         </div>
         <div className="filter-cards">
          {  visibleOffices.map((office) => ( <CardOffice key={office.id} office={office} />
          ))}
       
         
         </div>
        </Container>
        
        
         </Section>
    </div>
  )
}

export default  Contact 
