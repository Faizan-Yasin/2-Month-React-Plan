import { useCallback } from 'react'
import useFetch from './hooks/useFetch'
import { getUsers, getUser, createUser, updateUser } from './services/usersService'

const App = () => {

  const { data: users, loading: usersLoading, error: usersError } = useFetch(getUsers)
  const fetchUser = useCallback((signal) => getUser(1, signal), [])
  const { data: user, loading: userLoading, error: userError } = useFetch(fetchUser)

  if (usersLoading || userLoading) {
    return <h2>Loading...</h2>;
  }

  if (usersError) {
    return <h2>{usersError.message}</h2>;
  }

  if (userError) {
    return <h2>{userError.message}</h2>;
  }

  async function handleCreateUser() {
    const response = await createUser({
      id: 1,
      name: "Ali",
      email: "ali@gmail.com",
    })
    console.log(response);
  }

  async function handleUpdateUser() {
    const response = await updateUser(1, {
      name: "ahmed",
      email: "ahmed@gmail.com",
    })
    console.log(response);
  }

  async function handlePathUser() {
    const response = await updateUser(1, {
      name: "ahmed ali",
    })
    console.log(response);
  }

  async function handleDeleteUser() {
    const response = await updateUser(1)
    console.log(response);
  }

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>Name : {user.name}</h3>
          <h4>Email : {user.email}</h4>
        </div>
      ))}
      <h2>Users With ID 5</h2>
      <h3>Name : {user.name}</h3>
      <h4>Email : {user.email}</h4>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handlePathUser}>Path User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  )
}

export default App
