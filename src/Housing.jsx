
import React from 'react'
import { Link } from 'react-router-dom'

export default function Housing() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🏠 Housing</h2>
      <p>Find shared houses, rooms, and landlords accepting pets or temporary stays.</p>
      <ul>
        <li>📍 Smithfield – 1 room available, €700/month</li>
        <li>📍 Stoneybatter – Shared room, €500/month</li>
        <li>📍 Clonsilla – Entire house, €1,600/month</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
