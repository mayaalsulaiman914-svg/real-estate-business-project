import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 

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
            <Link to='/'> Back to website</Link>
        </nav>
     </aside>
     <main className='dashboard-content'>
      <Outlet />    
    </main> 
    </div>
  )
}

export default DashboardLayout
