
const LoginStatus = ({isLoggedIn}) => {
  return (
    <div>
        {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
    </div>
  )
}

export default LoginStatus