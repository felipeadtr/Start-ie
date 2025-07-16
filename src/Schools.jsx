
import React from 'react'
import { Link } from 'react-router-dom'

export default function Schools() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🏫 Schools</h2>
      <p>Explore recommended English schools and student feedback.</p>
      <ul>
        <li>🗣️ ISI Language School – Rating: 4.7</li>
        <li>📚 Atlas Language School – Rating: 4.6</li>
        <li>🎓 IBAT College – Rating: 4.3</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
