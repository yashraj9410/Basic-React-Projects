import React from 'react'
import UserContext from './userContext'

// children are the components rendered under the UserContext Provider
function UserContextProvider({children}) {
    const [user,setUser] = React.useState(null);
    // fetch all data here and then throw in value 
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider