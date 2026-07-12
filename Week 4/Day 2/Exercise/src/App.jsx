import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Employees from './pages/Employees'
import NotFound from './pages/NotFound'
import EmployeeDetail from './pages/EmployeeDetail'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Posts from './pages/Posts'
import Todos from './pages/Todos'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='employees' element={<Employees />} />

        <Route path='employees/:id' element={<EmployeeDetail />}>

          <Route index element={<Overview />} />
          <Route path='overview' element={<Overview />} />
          <Route path='posts' element={<Posts />} />
          <Route path='todos' element={<Todos />} />

          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
