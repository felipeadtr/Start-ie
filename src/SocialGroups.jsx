
import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialGroups() {
  return (
    <div style={{ padding: 20 }}>
      <h2>👥 Social Groups</h2>
      <p>Join groups based on interests and affinity:</p>
      <ul>
        <li>🇧🇷 Brazilians in Dublin</li>
        <li>🧘 Yoga lovers</li>
        <li>👨‍👩‍👦 Families with Kids</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
