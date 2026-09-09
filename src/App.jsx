import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard/Dashboard'
import WebsiteLayout from './components/Layouts/WebsiteLayout'
 
 
function App() {
  return (
      <>
    <Routes>
      <Route element={<WebsiteLayout/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/propertydetails/:id' element={<PropertyDetails />} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>

  );
}

export default App
