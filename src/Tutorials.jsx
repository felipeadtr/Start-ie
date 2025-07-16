
import React from 'react'
import { Link } from 'react-router-dom'

export default function Tutorials() {
  return (
    <div style={{ padding: 20 }}>
      <h2>📘 Tutorials & First Steps</h2>
      <p>Step-by-step guidance to get GNIB, PPS, Leap Card and more.</p>
      <ul>
        <li>📄 How to apply for PPS number</li>
        <li>📘 Opening a bank account</li>
        <li>💳 Getting a Leap Card</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
