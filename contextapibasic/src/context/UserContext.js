import React from "react";

// context is a provider in itself 
// it works as an wrapper like all components are wrapped inside of the 
// helps in state mnagement 
// also known as redux , redux-toolkit 
// all the components wrapped inside the User Context can take changes for the state directly from the wrapper 
// eg if there is a 4th child div which needs a data title , hence normally the data would pass through each parent divs to be finally available to the 4th child 
// hence context helps to manage the 4th child by directly proviging the data from the UserContext Wrapper 


const UserContext = React.createContext()

export default UserContext;
// this was the context and another is the provider as a component 