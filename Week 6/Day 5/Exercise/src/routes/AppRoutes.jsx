import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import { Suspense } from 'react'
import Employees from '../pages/Employees'
import EmployeeDetail from '../pages/EmployeeDetail'
import SkeletonCard from '../components/SkeletonCard'

const AppRoutes = () => {
    return (
        <div>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/employees' element={
                    <Suspense fallback={<SkeletonCard />}>
                        <Employees />
                    </Suspense>
                } />
                <Route
                    path="/employees/:id"
                    element={
                        <Suspense fallback={<SkeletonCard count={1} />}>
                            <EmployeeDetail />
                        </Suspense>
                    }
                />

            </Routes>

        </div>
    )
}

export default AppRoutes
