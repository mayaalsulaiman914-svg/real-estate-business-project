import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Dashboard.css'

const DashboardLayout = () => {
  return (
    <div className='dashboard-layout'>
     <aside className='dashboard-sidebar'>
        <h1>Estatein</h1>
        <nav>
            <Link to='/dashboard'> Dashboard</Link>
            <Link to='/dashboard/properties'> Properties</Link>
            <Link to='/dashboard/services'>Services Card</Link>
            <Link to='/dashboard/faqs'> Faq Questions</Link>
        </nav>
     </aside>
     <main className='dashboard-content'>
      <Outlet />    
    </main> 
    </div>
  )
}

export default DashboardLayout
