import React, { useState } from 'react'
import Section from '../components/Section/Section'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Container from '../components/Container/Container'
import offices from '../data/OfficeCard.js'
import CardOffice from '../components/CardOffice/CardOffice.jsx'
import Hero from '../components/Hero/Hero'
import ContactQuick from '../components/Contact/ContactQuick.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'

const Contact = () => {
  const [activeFilter , setActiveFilter] = useState("all")
  const visibleOffices = (activeFilter === "all" ? offices.slice(0,2) : offices.filter((office) => office.type === activeFilter).slice(0,2)
  )
  return (
    <div>
      
        <Hero
        title="Get in Touch with Estatein"
        description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities,
         or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        showStats = {false}
        >
        <ContactQuick/>
        
      </Hero>
       <Section className="connect" id="connect-form">
        <Container >
          <SectionHeading title="Let's Connect" description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need." showDecoration ={true} mobileEnd="Estatein" />
         <ContactForm />
        </Container>
      </Section>
      <Section className="office-location" id="office">
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
      <Section className="explore-section">
        <Container>
          <div className="explore-wrapper">
              <div className="explore-decoration">
              </div>
            <div className="explore-left">
              <img
                src="/assets/img/Chairs.png"
                alt=""
                className="explore-image explore-image-1"
              />
              <img
                src="/assets/img/men and women2.png"
                alt=""
                className="explore-image explore-image-2"
              />
              <SectionHeading
                showDecoration= {true}
                title="Explore Estateline's World"
                description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
              />
            </div>
            <div className="explore-right">
              <img
                src="/assets/img/men and women.png"
                alt=""
                className="explore-image explore-image-3"
              />
              <div className="explore-middle">
                <img
                  src="/assets/img/man and woman3.png"
                  alt=""
                  className="explore-image"
                />
                <img
                  src="/assets/img/men and woman4.png"
                  alt=""
                  className="explore-image"
                />
              </div>
              <img
                src="/assets/img/man and girl.png"
                alt=""
                className="explore-image explore-image-6"
              />
            </div>
          </div>  
        </Container>
      </Section>
    </div>
  )
}

export default  Contact 
