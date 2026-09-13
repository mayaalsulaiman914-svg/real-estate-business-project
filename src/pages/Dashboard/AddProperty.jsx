import React, { useState } from 'react'

const AddProperty = () => {
const [property , setProperty] = useState({
    title : "",
    type: "" ,
    city: "",
    description:"",
    price : "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image:"",

     additionalFees: {
      Propertytransfertax: "",
      Legalfees: "",
      Homeinspection: "",
      Propertyinsurance: "",
    },

    MonthlyCosts: {
      Propertytaxes: "",
      Homeownersassociationfee: "",
    },

    Totalinitialcosts: {
      Listingprice: "",
      Additionalfees: "",
      Downpayment: "",
      Mortgageamount: "",
    },

    Monthlyexpenses: {
      Propertytaxes: "",
      HomeownersAssociationFee: "",
      Propertyinsurance: "",
    },
})
  return (
    <div className='add-property'>
      <h1>Add Property</h1>
        <form className='add-form' onSubmit={(e) => {e.preventDefault()
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || []
        const heighstId = Math.max(...storedProperties.map((property)=> Number(property.id)),0)
        const lastId = Number(localStorage.getItem('lastPropertyId')) || heighstId
        const newId = lastId + 1
        const newProperty = {
          ...property,
          id : newId
        }
        const updatedProperties = [...storedProperties , newProperty]
        localStorage.setItem('properties' , JSON.stringify(updatedProperties))
        localStorage.setItem("lastPropertyId" ,newId )
        alert("property added succesfully!")
}}>
        <div className='col'><label>Title</label><input type='text' value={property.title} required onChange={(e) => setProperty({...property , title : e.target.value})} /></div>
        <div className='col'><label>Type</label><input type='text' value={property.type} required  onChange={(e) => setProperty({...property , type : e.target.value})} /></div>
        <div className='col'><label>Country</label><input type='text' value={property.city} required onChange={(e) => setProperty({...property , city : e.target.value})} /></div>
        <div className='col'><label>Description</label><textarea type='text' rows="6" required value={property.description}  onChange={(e) => setProperty({...property , description : e.target.value})} /></div>
        <div className='col'><label>Price</label><input type='text' value={property.price} required onChange={(e) => setProperty({...property , price : e.target.value})} /></div>
        <div className='col'><label>bedrooms</label><input type='number' value={property.bedrooms} required onChange={(e) => setProperty({...property ,  bedrooms: e.target.value})} /></div>
        <div className='col'><label>bathrooms</label><input type='number' value={property.bathrooms} required onChange={(e) => setProperty({...property ,  bathrooms: e.target.value})} /></div>
        <div className='col'><label>area in km</label><input type='text' value={property.area} required   onChange={(e) => setProperty({...property ,  area: e.target.value})} /></div>
        <div className='col'><label>image:</label> 
        <input type='file' style={{width : "200px"}} accept='image/*' required
        onChange={(e) => {const file = e.target.files[0]
               if (!file) return
               const reader = new FileReader()
                reader.onload = () => {setProperty({...property,image: reader.result})}
                reader.readAsDataURL(file) }}  /></div>

        <div className="container-group"><h4> Additional Fees :</h4> <div className="group"><label> Property transfer tax</label><input type='text' value={property.additionalFees.Propertytransfertax} onChange={(e)=> setProperty({...property,additionalFees:{...property.additionalFees , Propertytransfertax:e.target.value}})}   /></div> <div className="group"><label>Legal fees</label><input type='text' value={property.additionalFees.Legalfees} onChange={(e)=> setProperty({...property,additionalFees:{...property.additionalFees , Legalfees:e.target.value}})}  /></div>  <div className="group"><label> Home inspection </label><input type='text' value={property.additionalFees.Homeinspection} onChange={(e)=> setProperty({...property,additionalFees:{...property.additionalFees , Homeinspection:e.target.value}})} /></div> <div className="group"><label> Property insurance </label><input type='text' value={property.Propertyinsurance} onChange={(e)=> setProperty({...property,additionalFees:{...property.additionalFees , Propertyinsurance:e.target.value}})}  /></div> </div>
        <div className="container-group"><h4>Total initial costs :</h4> <div className="group"><label>Listing price</label><input type='text' value={property.Totalinitialcosts.Listingprice} onChange={(e)=> setProperty({...property,Totalinitialcosts:{...property.Totalinitialcosts , Listingprice:e.target.value}})}  /></div> <div className="group"><label> additional Fees</label><input type='text' value={property.Totalinitialcosts.Additionalfees} onChange={(e)=> setProperty({...property,Totalinitialcosts:{...property.Totalinitialcosts , Additionalfees:e.target.value}})}   /></div> <div className="group"><label>Down payment</label><input type='text' value={property.Totalinitialcosts.Downpayment} onChange={(e)=> setProperty({...property,Totalinitialcosts:{...property.Totalinitialcosts ,Downpayment:e.target.value}})}  /></div> <div className="group"><label>Mortgage amount</label><input type='text'  value={property.Totalinitialcosts.Mortgageamount} onChange={(e)=> setProperty({...property,Totalinitialcosts:{...property.Totalinitialcosts , Mortgageamount:e.target.value}})} /></div>    </div>
        <div className="container-group"><h4>Monthly expenses :</h4> <div className="group"><label>Property taxes</label><input type='text' value={property.Monthlyexpenses.Propertytaxes} onChange={(e)=> setProperty({...property, Monthlyexpenses:{...property.Monthlyexpenses , Propertytaxes:e.target.value}})}  /></div> <div className="group"><label>Home owners Association Fee</label><input type='text' value={property.Monthlyexpenses.HomeownersAssociationFee} onChange={(e)=> setProperty({...property, Monthlyexpenses:{...property.Monthlyexpenses , HomeownersAssociationFee:e.target.value}})}   /></div> <div className="group"><label>Property insurance</label><input type='text' value={property.Monthlyexpenses.Propertyinsurance} onChange={(e)=> setProperty({...property, Monthlyexpenses:{...property.Monthlyexpenses , Propertyinsurance:e.target.value}})}   /></div></div>
          <div className="container-group"><h4>  Monthly Costs :</h4> <div className="group"><label> Property taxes</label><input type='text' value={property.MonthlyCosts.Propertytaxes} onChange={(e)=> setProperty({...property, MonthlyCosts:{...property.MonthlyCosts , Propertytaxes: e.target.value}})}  /></div>  <div className="group"><label>Home owners association fee</label><input type='text'  /></div>   </div>
        <div className="add">
           <button className='add-btn'  type='submit'>Add</button>
        </div>
      </form>     
    </div>
  )
}

export default AddProperty
