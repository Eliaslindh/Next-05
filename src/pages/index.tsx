import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

export default function Home() {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <button onClick={() => setNumber(number - 1)}>Minus</button>
      <button onClick={() => setNumber(0)}>Reset</button>
    </div>
  )
}
