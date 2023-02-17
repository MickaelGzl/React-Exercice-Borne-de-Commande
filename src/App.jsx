import ProductsList from './components/products-list/products-list'
import './App.css'
import Order from './components/order-list/order-list'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState([])

  return (
    <div className="App">
      < ProductsList count={count} setCount={setCount} />
      < Order count={count} setCount={setCount} />
    </div>
  )
}

export default App
