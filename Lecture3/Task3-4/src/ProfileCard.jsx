
const ProfileCard = ({name,age,bio}) => {
  return (
    <div>
        <h2>User: {name}</h2>
        <p>Is {age} years old</p>
        <p>{bio}</p>
    </div>
  )
}

export default ProfileCard