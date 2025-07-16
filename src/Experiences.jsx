
import React from 'react'
import { Link } from 'react-router-dom'

export default function Experiences() {
  return (
    <div style={{ padding: 20 }}>
      <h2>🗣️ User Experiences</h2>
      <p>See stories shared by other immigrants:</p>
      <ul>
        <li>“Consegui emprego com ajuda do app!” – Maria</li>
        <li>“Achei escola barata e boa!” – João</li>
        <li>“Fiz amigos indo em grupos do app” – Luana</li>
      </ul>
      <Link to="/">← Back to Home</Link>
    </div>
  )
}
