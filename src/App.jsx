import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard/Dashboard'
import WebsiteLayout from './components/Layouts/WebsiteLayout'
import DashboardLayout from './pages/Dashboard/DashboardLayout'
import PropertiesDashboard from './pages/Dashboard/PropertiesDashboard'
import ServicesCardDashboard from './pages/Dashboard/ServicesCardDashboard'
import FaqDashboard from './pages/Dashboard/FaqDashboard'
import PropertyDashboardDetails from './pages/Dashboard/PropertyDashboardDetails'
import AddProperty from './pages/Dashboard/AddProperty'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddFaq from './pages/Dashboard/AddFaq'
import EditFaq from './pages/Dashboard/EditFaq'

function ScrollToHash() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const id = hash.substring(1);
        const timer = setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [pathname, hash]);
    return null;
}


 
function App() {
  return (
      <>
      <ScrollToHash/>
      <Routes>
      <Route element={<WebsiteLayout/>} >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/properties' element={<Properties/>} />
      <Route path='/propertydetails/:id' element={<PropertyDetails />} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      </Route>
      <Route element={<DashboardLayout />} >
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/properties' element={<PropertiesDashboard />} />
      <Route path='/dashboard/properties/add' element={<AddProperty />} />
      <Route path='/dashboard/properties/:id' element={<PropertyDashboardDetails />} />
      <Route path='/dashboard/services' element={<ServicesCardDashboard />} />
      <Route path='/dashboard/faqs' element={<FaqDashboard />} />
      <Route path='/dashboard/faqs/add' element={<AddFaq />} />
      <Route path='/dashboard/faqs/:id' element={<EditFaq />} />

      </Route>
    </Routes>
    </>

  );
}

export default App
