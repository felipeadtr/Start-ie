
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🏠 Welcome to Start.ie</h1>
      <p>This platform helps immigrants settle in Ireland with access to housing, jobs, tutorials, and more.</p>
      <ul>
        <li><Link to="/housing">Housing</Link></li>
        <li><Link to="/jobs">Jobs & Referrals</Link></li>
        <li><Link to="/tutorials">Tutorials & First Steps</Link></li>
        <li><Link to="/schools">Schools</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/visa-benefits">Visa Benefits</Link></li>
        <li><Link to="/journey-progress">Journey Progress</Link></li>
        <li><Link to="/experiences">User Experiences</Link></li>
        <li><Link to="/social-groups">Social Groups</Link></li>
        <li><Link to="/activities">Activities</Link></li>
      </ul>
    </div>
  )
}
