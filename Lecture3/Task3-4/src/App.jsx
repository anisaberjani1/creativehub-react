import './App.css'
import LoginStatus from './LoginStatus';
import ProfileCard from './ProfileCard'

function App() {
  const user = {
    name: 'Anisa Berjani',
    age: 22,
    bio: 'Frontend Developer'
  }

  const isLoggedIn = true;

  return (
    <>
      <h1>User Profile</h1>
      <ProfileCard name={user.name} age={user.age} bio={user.bio}/>
      <LoginStatus isLoggedIn={isLoggedIn}/>
    </>
  )
}

export default App
