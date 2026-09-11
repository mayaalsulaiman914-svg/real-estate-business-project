import React from 'react'
import './ContactForm.css'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button';

const ContactForm = () => {
const {register , 
       handleSubmit ,
       formState : {errors} ,
     } = useForm();
const onSubmit = (data) => {console.log(data)}

       return (
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
    
    <div className="form-group"><label>First Name</label><input type='text' placeholder='Enter First Name' {...register("firstName" , {required : "First Name is required"})} />{errors.firstName &&(<span className='error-message'>{errors.firstName.message}</span>) }</div>
    <div className="form-group"><label>Last Name</label><input type='text' placeholder='Enter Last Name' {...register("lastName" , {required : "Last Name is required"})} />{errors.lastName &&(<span className='error-message'>{errors.lastName.message}</span>) }</div>
    <div className="form-group"><label>Email</label><input type='email' placeholder='Enter your Email' {...register("email" , {required : "Your Email is required"})} />{errors.email &&(<span className='error-message'>{errors.email.message}</span>) }</div>
    <div className="form-group"><label>Phone</label><input type='text' placeholder='Enter Phone Number' {...register("phone" , {required : "Your phone is required"})} />{errors.phone &&(<span className='error-message'>{errors.phone.message}</span>) }</div>
    <div className="form-group"><label>Inquiry Type</label><select {...register("inquiryType")}><option value= "">select inquiry type</option><option value="buy">Buying</option> <option value="sell">Selling</option> <option value="rent">Renting</option> </select> </div>
    <div className="form-group"><label>How Did You Hear About Us?</label><select {...register("source")}><option value= "">Select</option><option value="google">Google</option> <option value="social">Social Media</option> <option value="friend">Friend</option> </select> </div>
    <div className="form-group message"> <label>Message</label> <textarea rows="6" placeholder='Enter your Message here..' {...register("message")} /> </div>
    <div className="form-footer"><label className='checkbox'><input type='checkbox' {...register("terms" , {required : true})} /><span>I agree with <a href=''>Terms of Use</a> and Privacy Policy</span></label><Button variant='primary' type='submit'>Send Your Message</Button></div>
      
    </form>
  )

}

 



export default ContactForm
