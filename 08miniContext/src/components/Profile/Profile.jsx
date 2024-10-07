import React, {useContext} from 'react'
import UserContext from '../../context/userContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>

  return (
    <div>
        <div>
            Welcome {user.username}
        </div>
    </div>
  )
}

export default Profile
