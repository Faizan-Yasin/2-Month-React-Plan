import React from 'react'
import PropTypes from "prop-types"

const ProfileCard = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
    </div>
  )
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired
}

export default ProfileCard


