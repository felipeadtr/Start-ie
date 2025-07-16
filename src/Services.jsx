
import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🛠️ Services</h2>
      <p>Find trusted local services from the community.</p>
      <ul>
        <li>🔧 Plumber – João Silva</li>
        <li>🎨 Painter – Amanda Freitas</li>
        <li>💇 Hairdresser – Luiz Lima</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
