import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Section from './components/Section/Section'
import SectionHeading from './components/SectionHeading/SectionHeading'
import Container from './components/Container/Container'
import Button from './components/Button/Button'
 
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/propertydetails' element={<PropertyDetails/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
     <Section className='cta'>
      <div className='bg-left'><img src='/assets/img/Abstract Design.png' /></div>
      <div className='bg-right'><img src='/assets/img/Abstract Design-r.png' /></div>
      <div className='bg-left-sm'><img src='/assets/img/Abstract Design-l-sm.png' /></div>
      <div className='bg-right-sm'><img src='/assets/img/Abstract Design-r-sm.png' /></div>
       <Container>
              <SectionHeading title="Start Your Real Estate Journey Today" description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance." />
              <Button>Explore Properties</Button>
       </Container>
    </Section>
    </>
  )
}

export default App
