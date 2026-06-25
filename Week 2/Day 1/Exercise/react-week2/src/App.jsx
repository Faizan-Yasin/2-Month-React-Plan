// Main component that displays the UI

import React from 'react'
import ProfileCard from './components/ProfileCard'

const App = () => {
  const profiles = [
    {
      name: "Faizan",
      role: "Manager",
      avatarUrl: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      bio: "I am Manager",
      isOnline: true
    },
    {
      name: "Ahmed",
      role: "Admin",
      avatarUrl: "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg",
      bio: "I am Admin",
      isOnline: false
    },
    {
      name: "Ali",
      role: "User",
      avatarUrl: "https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80",
      bio: "I am User",
      isOnline: true
    },
    {
      name: "Abdullah",
      role: "User",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiroqfIkp4NTAD3iZ3h6Gf9OjuPhAS4RPAvrlNv1JzPR-oh2pE1so2oPZB&s=10",
      bio: "I am User",
      isOnline: false
    }
  ]
  // const profile = {
  //   name: "Faizan",
  //   role: "Manager",
  //   avatarUrl: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
  //   bio: "I am Manager",
  //   isOnline: true
  // }
  return (
    // <div>
    //   <h1>Hello React</h1>
    //   <p>Learning React</p>
    // </div>
    // React.createElement("div", null,
    //   React.createElement("h1", null, "Hello React"),
    //   React.createElement("p", null, "Learning React")
    // )
    <>{profiles.map((item, index) => {
      return <ProfileCard key={index} profile={item} />
    })}</>
  )
}

export default App

