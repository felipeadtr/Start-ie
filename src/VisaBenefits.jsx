
import React from 'react'
import { Link } from 'react-router-dom'

export default function VisaBenefits() {
  return (
    <div style={{ padding: 20 }}>
      <h2>📄 Visa Benefits</h2>
      <p>Learn the benefits of each Stamp and how to access student programs.</p>
      <ul>
        <li>Stamp 2 – Work part-time, study, apply for Leap discounts</li>
        <li>Stamp 1G – Post-study work rights</li>
        <li>Stamp 4 – Free eCollege & Fetch Courses</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
