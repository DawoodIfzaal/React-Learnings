import { useLoaderData } from "react-router-dom"

export default function Github(){
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/DawoodIfzaal")
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    // }, [])
    const data = useLoaderData()

    return( 
        <div>Github Followers: {data.followers}</div>
    )
}

export const githubFollowerInfo = async() => {
    const response = await fetch('https://api.github.com/users/DawoodIfzaal')
    return response.json()
}