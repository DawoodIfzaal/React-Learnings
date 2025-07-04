import { useContext } from "react"
import userContext from "../context/UserContext"

function Profile(){
    const {user} = useContext(userContext)

    if(!user){
        return <div>Login, please</div>
    }
    
    return(
        <div>Welcome, {user.username}</div>
    )
}

export default Profile