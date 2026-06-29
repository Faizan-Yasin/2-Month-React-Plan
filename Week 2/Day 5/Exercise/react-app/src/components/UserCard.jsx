import React from 'react'

const UserCard = ({ name, username, email, company, address }) => {
    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>UserName : {username}</h2>
            <h3>Email : {email}</h3>
            <h3>Company Name : {company.name}</h3>
            <h3>City : {address.city}</h3>
        </div>
    )
}

export default UserCard
