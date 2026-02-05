import { useState } from 'react'

export default function Toggle({ title, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="toggle">
      <button onClick={() => setOpen(!open)} className="toggle-title">
        {title}
      </button>

      {open && (
        <ul className="toggle-content">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}