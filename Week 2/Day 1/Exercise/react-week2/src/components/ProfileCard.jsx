import React from 'react'

const ProfileCard = ({profile}) => {
    return (
        <div>
            <h1>User Name : {profile.name}</h1>
            <h2>User Role : {profile.role}</h2>
            <p>User Bio : {profile.bio}</p>
            <img src={profile.avatarUrl} alt={profile.name} width={100} />
            <h1 style={{color: profile.isOnline ? "green" : "gray"}}>{profile.isOnline ? "Online" : "Offline"}</h1>
        </div>
    )
}

export default ProfileCard
