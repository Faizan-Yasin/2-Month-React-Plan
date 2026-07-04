import React from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import NotificationList from './NotificationList'

const Home = () => {
    return (
        <div>
            <Layout />
            <Navbar />
            <NotificationList />
        </div>
    )
}

export default Home
