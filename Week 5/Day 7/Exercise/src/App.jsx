import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './redux/features/countSlice'
import { toggleTheme } from './redux/features/themeSlice'
import { countSelector } from './redux/selectors/countSelector'

const App = () => {

  const count = useSelector((state) => state.count.value)
  const theme = useSelector((state) => state.theme.mode)
  const double = useSelector(countSelector)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count : {count}</h2>
      <h2>Count Double : {double}</h2>
      <h2>Theme : {theme}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
