import React from 'react'

const UserDirectoryView = ({ data, isloading, error }) => {
    if (isloading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    if (data.length === 0) {
        return <h1>Data Not Found</h1>
    }
    return (
        <div>
            {data.map((value) => {
                return (
                    <div key={value.id}>
                        <h1>Name : {value.name}</h1>
                        <h2>Email : {value.email}</h2>
                        <h3>City: {value.address.city}</h3>
                    </div>
                )
            })}
        </div>
    )
}
export default UserDirectoryView
