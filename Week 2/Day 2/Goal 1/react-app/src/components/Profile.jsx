import React from 'react'

const Profile = (props) => {
    // props.name = "Ahemd" not allowed
  return (
    <div>
      <h1>Hello React from {props.name}</h1>
      <p>Leaning React</p>
    </div>
  )
}

export default Profile
