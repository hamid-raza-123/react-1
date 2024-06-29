import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <img className='img' src="https://cdn.punchng.com/wp-content/uploads/2018/01/16201323/RR-Phantom-2018.jpg" alt="" />
      <div className="card">
        <h1>Phantom</h1>
        <p>Phantom is a decentralized exchange (DEX) that allows users to trade cryptocurrencies without</p>
        <p>the need for a centralized intermediary. It is built on the Solana blockchain,</p>
      </div>
      <button>
        <a href="https://www.rolls-roycemotorcars.com/en_GB/home.html">Learn More</a>
      </button>
    </div>
    </>
  )
}

export default App
