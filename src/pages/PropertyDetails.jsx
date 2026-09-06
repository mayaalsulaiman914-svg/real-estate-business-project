import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../data/properties';
import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import PropertyCost from '../components/PropertyCost/PropertyCost';
import CostItem from '../components/PropertyCost/CostItem';

const PropertyDetails = () => {
  const {id} = useParams();
  console.log(id) 
  const property = properties.find((item) => String(item.id )== String(id))
  console.log(property)
  if (!property) {
    return "property not found"
  }

 const costDetails =[
  {
    id : "1",
    title : "Additional Fees" , 
    items : [
      {
        title : "Property Transfer Tax",
        description : "Based on the sale price and local regulations",
        price : property. additionalFees.Propertytransfertax,
      },
      {
        title : "Legal Fees",
        description : "Approximate cost for legal services, including title transfer",
        price : property.additionalFees.Legalfees,
      },
      {
        title : "Home Inspection",
        description : "Recommended for due diligence",
        price : property.additionalFees.Homeinspection,
      },
      {
        title : "Property Insurance",
        description : "Annual cost for comprehensive property insurance",
        price : property.additionalFees.Propertyinsurance,
      },
    ],
  },
  {
     id : "2",
    title : "Monthly Costs" , 
    items : [
      {
        title : "Property Taxes",
        description : "Approximate monthly property tax based on the sale price and local rates",
        price : property.MonthlyCosts.Propertytaxes,
      },
      {
        title : "Homeowners' Association Fee",
        description : "Monthly fee for common area maintenance and security",
        price : property.MonthlyCosts.Homeownersassociationfee,
      },
     
    ],
  },
  {
     id : "3",
    title : "Total Initial Costs" , 
    items : [
      {
        title : "Listing Price",
        price : property.Totalinitialcosts.Listingprice,
      },
      {
        title : "Additional Fees",
        description : "Property transfer tax, legal fees, inspection, insurance",
        price : property.Totalinitialcosts.additionalFees,
      },
      {
        title : "Down Payment",
        description : "20%",
        price : property.Totalinitialcosts.Downpayment,
      },
      {
        title : "Mortgage Amount",
        description : "If applicable",
        price : property.Totalinitialcosts.Mortgageamount,
      },
     
    ],
  },
  {
     id : "4",
    title : "Monthly Expenses" , 
    items : [
      {
        title : "Property Taxes",
        price : property.Monthlyexpenses.Propertytaxes,
      },
      {
        title : "Homeowners' Association Fee",
        price : property.Monthlyexpenses.HomeownersAssociationFee ,
      },
      {
        title : "Mortgage Payment",
        description : "If applicable",
        price : "Varies based on terms and interest rate",
      },
      {
        title : "Property Insurance",
        description : "Approximate monthly cost",
        price : property.Monthlyexpenses.Propertyinsurance,
      },
     
    ],
  },
 ]
  return (
    <div style={{color : "white"}}>
      
    <Section className="hero-property">
      <Container>
        <div className="heading-hero"><h1>{property.title}</h1> <div className='city'>< img  src="/assets/img/Location Icon.png"/> <p>{property.city}</p></div>
         <div className="price"><small>Price</small><p>{property.price}</p></div> </div>
         <div className="image-hero"> <img src={property.image} /></div>
         <div className="content-hero">
            <div className="desc">
               <h2>Description</h2>
               <p className='descreption'>{property.description}</p>
               <div className='container-room'><div className='back'> <div className="image"><img src='/assets/img/bed Icon.png' /> <small>Bedroom</small> </div><p>0{property.bedrooms} </p></div> <div className='back'> <div className="image"> <img src='/assets/img/bathroom Icon (1).png' /> <small>Bathroom</small></div> <p>0{property.bathrooms} </p></div> <div className='back'> <div className="image"><img src='/assets/img/Area Icon.png' /> <small>Area</small></div> <p>{property.area} Square Feet</p></div></div>
            </div>
            <div className="key-feature">
              <h2>Key Features and Amenities</h2>
              <ul>
                <li><img src='/assets/img/Key Icon.png' /><p>Expansive oceanfront terrace for outdoor entertaining</p></li>
                <li><img src='/assets/img/Key Icon.png' /><p>Gourmet kitchen with top-of-the-line appliances</p></li>
                <li><img src='/assets/img/Key Icon.png' /><p>Private beach access for morning strolls and sunset views</p></li>
                <li><img src='/assets/img/Key Icon.png' /><p>Master suite with a spa-inspired bathroom and ocean-facing balcony</p></li>
                <li><img src='/assets/img/Key Icon.png' /><p>Private garage and ample storage space</p></li>
              </ul>
            </div>
          </div>
      </Container>
       </Section>

       <Section className="comprehensive-pricing">
        <Container>
        <SectionHeading title="Comprehensive Pricing Details"  description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision" showDecoration={true} />
        <div className="note"><p className='title'>Note</p><p className='desc'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p></div>
        <div className="property-costs">
        <aside className='listing-price'><span>Listing Price</span><p>{property.price}</p></aside>
        <div className="propery-costs-content">
          {costDetails.map((section) => (
              <PropertyCost key={section.id} title={section.title} items = {section.items} />
          ))}
           
        </div>
          </div>     
     
        </Container>
       </Section>
    </div>
  )
}

export default PropertyDetails
