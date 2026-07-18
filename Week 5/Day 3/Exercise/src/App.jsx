import React from 'react'
import { useGetUserByIdQuery, useGetUsersQuery, useGetPostsQuery, useCreateUserMutation, useDeleteUserMutation, employeeApi } from './redux/services/employeeApi'
import { useDispatch } from 'react-redux'

const App = () => {

  const { data: users, isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery()
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useGetUserByIdQuery(5)
  const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = useGetPostsQuery(5)
  const [createUser, { isLoading }] = useCreateUserMutation()
  const [deleteUser, { isLoading: isDeleteLoading, isError }] = useDeleteUserMutation()
  const dispatch = useDispatch()

  async function handleUser() {
    try {
      const result = await createUser({
        id: crypto.randomUUID(),
        name: "Ali Hassan",
        email: "ali@gmail.com",
        username: "aliHassan",
      }).unwrap()
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      const result = await deleteUser(1).unwrap()
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {
        isUsersLoading
          ? <div>Loading...</div>
          : isUsersError
            ? <div>Error</div>
            : users.map(user => (
              <div key={user.id} onMouseEnter={() => dispatch(employeeApi.util.prefetch(
                "getUserById",
                user.id,
                {}
              ))}>
                {user.name}
              </div>
            ))
      }
      <div>
        <h2>Get user by id</h2>
      </div>
      {
        isUserLoading
          ? <div>Loading...</div>
          : isUserError
            ? <div>Error</div>
            : <div>
              <h3>{user.name}</h3>
            </div>
      }
      <div>
        <h2>Get posts by id</h2>
      </div>
      {
        isPostsLoading
          ? <div>Loading...</div>
          : isPostsError
            ? <div>Error</div>
            : posts.map(post => (
              <div key={post.id}>
                {post.title}
              </div>
            ))
      }
      <div>
        <h2>Add User</h2>
      </div>
      <button onClick={handleUser} disabled={isLoading}>Add User</button>
      <div>
        <h2>Delete User</h2>
      </div>
      {
        isDeleteLoading
          ? <div>Loading...</div>
          : isError
            ? <div>Error</div>
            : <div>
            </div>
      }
      <button onClick={handleDelete} disabled={isDeleteLoading}>Delete User</button>
    </div>
  )
}

export default App
