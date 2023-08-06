import { useState } from "react"
import { userContext } from "./userContext"

function UserProvider(props){
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        mobile: "",
        message: ""
    })
    
    return(
        <userContext.Provider value={{userData, setUserData}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserProvider