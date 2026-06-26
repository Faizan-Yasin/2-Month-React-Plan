import React from 'react'
import UserInfo from './UserInfo'
import UserStatus from './UserStatus'
import UserPosts from './UserPosts'

const ProfilePage = () => {
  return (
    // <div>
    //   <h1>Hello I am Ali</h1>
    //   <p>I am Frontend Developer</p>
    //   <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt="Profile Image" />
    //   <h2>Online</h2>
    //   <ul>
    //     <li>Post 1</li>
    //     <li>Post 2</li>
    //   </ul>
    // </div>
    <div>
        <UserInfo/>
        <UserStatus/>
        <UserPosts/>
    </div>
  )
}

export default ProfilePage
