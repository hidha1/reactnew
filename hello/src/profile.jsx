import React from 'react'
import UserCard from './UserCard.'
function profile() {
  return (
    <div>
        <h2>User Profiles</h2>
        <UserCard name='Alice' age={25}/>
        <UserCard name='bob' age={67}/>
        </div>
  )
}

export default profile