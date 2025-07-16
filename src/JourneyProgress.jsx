
import React from 'react'
import { Link } from 'react-router-dom'

export default function JourneyProgress() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🎯 Journey Progress</h2>
      <p>Track your migration progress through steps and sub-steps:</p>
      <ul>
        <li>Mission: Get PPS – ✅ Submit docs / ✅ Attend appointment</li>
        <li>Mission: Open bank account – 🟡 Submit proof of address</li>
        <li>Mission: Find job – 🔴 Upload CV</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
