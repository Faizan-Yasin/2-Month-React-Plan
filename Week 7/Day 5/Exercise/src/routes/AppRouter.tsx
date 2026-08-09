import { Routes, Route } from 'react-router'
import LoginForm from '../components/LoginForm'
import ProtectedRoute from '../components/ProtectedRoute'
import UserDirectory from '../components/UserDirectory'
import NotFound from '../components/NotFound'
import CheckLogin from '../components/CheckLogin'

const AppRouter = () => {
    return (
        <Routes>

            <Route element={<CheckLogin />}>
                <Route path='/' element={<LoginForm />} />
            </Route>

            <Route element={<ProtectedRoute />}>

                <Route path='/userDirectory' element={<UserDirectory />} />

            </Route>

            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRouter
