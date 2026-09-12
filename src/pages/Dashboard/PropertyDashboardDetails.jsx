import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PropertyDashboardDetails = () => {
const {id} = useParams()
const [property , setProperty] = useState(null)
useEffect (() => {
  const storedProperties = JSON.parse(localStorage.getItem('properties')) || []
  const foundProperty = storedProperties.find((property) => String(property.id) === String(id))
  setProperty(foundProperty)
 
} , [id])

if (!property) {return <p>property  not found</p>}

  return (
    <div >
      <div key={property.id}>
      <h1>Edit Property</h1> 
      <form onSubmit={(e) => {e.preventDefault()
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || []
        const updateProperties = storedProperties.map((item) => String(item.id) === String(property.id) ? property : item)
        localStorage.setItem('properties' , JSON.stringify(updateProperties))
        alert("property updated!")
}}>
        <div><label>Title</label><input type='text' value={property.title} onChange={(e) => setProperty({...property , title : e.target.value})} /></div>
        <div><label>Type</label><input type='text' value={property.type} onChange={(e) => setProperty({...property , type : e.target.value})} /></div>
        <div><label>Country</label><input type='text' value={property.city} onChange={(e) => setProperty({...property , type : e.target.value})} /></div>
        <div><label>Description</label><textarea type='text' value={property.description} onChange={(e) => setProperty({...property , description : e.target.value})} /></div>
        <div><label>Price</label><input type='text' value={property.price} onChange={(e) => setProperty({...property , price : e.target.value})} /></div>
        <div><label>bedrooms</label><input type='number' value={property.bedrooms} onChange={(e) => setProperty({...property ,  bedrooms: e.target.value})} /></div>
        <div><label>bathrooms</label><input type='number' value={property.bathrooms} onChange={(e) => setProperty({...property ,  bathrooms: e.target.value})} /></div>
        <div><label>area in km</label><input type='text' value={property.area} onChange={(e) => setProperty({...property ,  area: e.target.value})} /></div>
        <div><label>image:</label><img src={property.image} style={{width : "200px"}}/>
        <input type='file' accept='image/*' 
        onChange={(e) => {const file = e.target.files[0]
               if (!file) return
               const reader = new FileReader()
                reader.onload = () => {setProperty({...property,image: reader.result})}
                reader.readAsDataURL(file) }}  /></div>

        <div className="additionalFees"><h4> Additional Fees :</h4> <div className="group"><label> Property transfer tax</label><input type='text' value={property.additionalFees.Propertytransfertax} /></div> <div className="group"><label>Legal fees</label><input type='text' value={property.additionalFees.Legalfees} /></div>  <div className="group"><label> Home inspection </label><input type='text' value={property.additionalFees.Homeinspection } /></div> <div className="group"><label> Property insurance </label><input type='text' value={property.additionalFees.Propertyinsurance} /></div> </div>
        <div className="MonthlyCosts"><h4>  Monthly Costs :</h4> <div className="group"><label> Property taxes</label><input type='text' value={property.MonthlyCosts.Propertytaxes} /></div>  <div className="group"><label>Home owners association fee</label><input type='text' value={property.MonthlyCosts.Homeownersassociationfee} /></div>   </div>
        <div className="Totalinitialcosts"><h4>Total initial costs :</h4> <div className="group"><label>Listing price</label><input type='text' value={property.Totalinitialcosts.Listingprice} /></div> <div className="group"><label> additional Fees</label><input type='text' value={property.Totalinitialcosts.additionalFees} /></div> <div className="group"><label>Down payment</label><input type='text' value={property.Totalinitialcosts.Downpayment} /></div> <div className="group"><label>Mortgage amount</label><input type='text' value={property.Totalinitialcosts.Mortgageamount} /></div>    </div>
        <div className="Monthlyexpenses"><h4>Monthly expenses :</h4> <div className="group"><label>Property taxes</label><input type='text' value={property.Monthlyexpenses.Propertytaxes} /></div> <div className="group"><label>Home owners Association Fee</label><input type='text' value={property.Monthlyexpenses.HomeownersAssociationFee} /></div> <div className="group"><label>Property insurance</label><input type='text' value={property.Monthlyexpenses.Propertyinsurance} /></div></div>
        <button type='submit'>save changes</button>
      </form>                                               
       
     
      </div>
    
    </div>
  )
 }

export default PropertyDashboardDetails
