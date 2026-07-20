import React from 'react'
import { counterAtom } from './jotai/counterAtom'
import { incrementAtom } from './jotai/counterAtom'
import { fullNameAtom } from './jotai/fullNameAtom'
import { totalAtom, quantityAtom, priceAtom } from './jotai/totalAtom'
import { useAtom } from 'jotai'
import Users from './components/Users'
import { Suspense } from 'react'

const App = () => {

  const [count, setCount] = useAtom(counterAtom)
  const [name,] = useAtom(fullNameAtom)
  const [, setNewCount] = useAtom(incrementAtom)
  const [total, setTotal] = useAtom(totalAtom)
  const [price] = useAtom(priceAtom)
  const [quantity] = useAtom(quantityAtom)

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev > 0 ? prev - 1 : 0)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Admin Name : {name}</h2>

      <button onClick={() => setNewCount(prev => prev + 1)}>Increment Count</button>

      <h2>Total : {total}</h2>
      <h3>Price : {price}</h3>
      <h3>Quantity : {quantity}</h3>

      <input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))} />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users />
      </Suspense>

    </div>
  )
}

export default App
