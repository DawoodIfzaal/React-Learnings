import userContext from "../context/userContext";
import { useContext } from "react";

export default function Profile(){
    const {user} = useContext(userContext)

    if(!user){
        return <div>Please log in</div>
    }

    return <div>Welcome {user.username}</div>
}