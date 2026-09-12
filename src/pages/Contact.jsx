import React, { useState } from 'react'
import Section from '../components/Section/Section'
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Container from '../components/Container/Container'
import offices from '../data/OfficeCard.js'
import CardOffice from '../components/CardOffice/CardOffice.jsx'

const Contact = () => {
  const [activeFilter , setActiveFilter] = useState("all")
  const visibleOffices = (activeFilter === "all" ? offices.slice(0,2) : offices.filter((office) => office.type === activeFilter).slice(0,2)
  )
  return (
    <div>
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
