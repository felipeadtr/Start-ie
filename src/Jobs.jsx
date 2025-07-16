
import React from 'react'
import { Link } from 'react-router-dom'

export default function Jobs() {
  return (
    <div style={{ padding: 20 }}>
      <h2>💼 Jobs & Referrals</h2>
      <p>Check opportunities, leave referrals, and find part-time work.</p>
      <ul>
        <li>👩‍🍳 Kitchen Porter – €12/h – Dublin 8</li>
        <li>🧼 Cleaner – €13/h – Blanchardstown</li>
        <li>📦 Warehouse Assistant – €14/h – Lucan</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
