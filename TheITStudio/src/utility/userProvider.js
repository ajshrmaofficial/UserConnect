import { useState } from "react"
import { userContext } from "./userContext"

function UserProvider(props){
    const [userData, setUserData] = useState({})
    
    return(
        <userContext.Provider value={{userData, setUserData}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider