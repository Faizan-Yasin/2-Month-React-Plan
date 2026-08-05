interface Profile {
    name: string,
    role: string,
    avatarUrl: string,
    bio?: string,
    isOnline: boolean,
}

interface ProfileCardProps {
    profile: Profile
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
    return (
        <div>
            <h1>User Name : {profile.name}</h1>
            <h2>User Role : {profile.role}</h2>
            {profile.bio && <p>User Bio : {profile.bio}</p>}
            <img src={profile.avatarUrl} alt={profile.name} width={100} />
            <h3 style={{ color: profile.isOnline ? "green" : "gray" }}>{profile.isOnline ? "Online" : "Offline"}</h3>
        </div>
    )
}

export default ProfileCard