import React from 'react'
import UserContext from './userContext'

function UserContextProvider({children}) {
    const [user,setuser] = React.useState(null);
    // fetch all data here and then throw in value 
  return (
    <UserContext.Provider value={{user,setuser}}>
    </UserContext.Provider>
  )
}

export default UserContextProvider