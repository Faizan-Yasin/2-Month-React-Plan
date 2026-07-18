import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset, setValue } from './redux/features/counterSlice'
import { addUser, clearUser, deleteUser, updateUser } from './redux/features/userSlice'
import { filteredUser } from './redux/selectors/userSelector'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.user)
  const user = useSelector(filteredUser)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState("")
  const [newvalue, setNewValue] = useState("")

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Increment By Amount</button>
      <button onClick={() => dispatch(setValue(Number(newvalue)))}>Set Value</button>
      <div>
        <label htmlFor="first">Amout : </label>
        <input type="number" id='first' value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label htmlFor="second">Set Value : </label>
        <input type="number" id='second' value={newvalue} onChange={(e) => setNewValue(e.target.value)} />
      </div>

      <div>
        {users.map(user =>
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => dispatch(addUser({ id: 3, name: "Abdullah", email: "abdullah@gmail.com" }))}>Add Employee</button>
        <button onClick={() => dispatch(deleteUser(3))}>Delete Employee</button>
        <button onClick={() => dispatch(updateUser({ id: 2, name: "Hassan", email: "hassan@gmail.com" }))}>Update Employee</button>
        <button onClick={() => dispatch(clearUser())}>Clear Employee</button>
      </div>
    </div >
  )
}

export default App
