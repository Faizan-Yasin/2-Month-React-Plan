/*
Testing Benefit:

UserDirectoryView is very easy to test because it only depends on props.
We can pass fake users, loading, or error values without mocking API calls.

UserDirectoryContainer is tested separately to verify data fetching logic.

Separating logic from UI makes components easier to test, reuse, and maintain.
*/

import React from 'react'
import { useFetch } from '../hooks/useFetch'
import UserDirectoryView from './UserDirectoryView'

const UserDirectoryContainer = () => {
    const { data, isloading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <div>
            <UserDirectoryView data={data} isloading={isloading} error={error} />
        </div>
    )
}

export default UserDirectoryContainer
