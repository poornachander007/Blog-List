// Write your JS code here
import './index.css'

const profile = 'https://assets.ccbp.in/frontend/react-js/profile-img.png'
// alt should be profile

const UserInfo = () => {
  const a = ''

  return (
    <div className="container">
      <img className="profile" src={profile} alt="profileprofile" />
      <h1 className="userName">Wade Warren</h1>
      <p className="aboutUser">Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
