
import React from 'react'
import { Link } from 'react-router-dom'

export default function Activities() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🏃 Activities</h2>
      <p>Check out upcoming local activities:</p>
      <ul>
        <li>⚽ Football – Sunday 15h @ Phoenix Park</li>
        <li>🚲 Bike ride – Saturday 10h @ Docklands</li>
        <li>🏊 Swimming Group – Wednesday 19h</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
