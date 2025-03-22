import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function UserProfileEdit(){
    const [onChange, setOnchange] = useState(true)
    const navigate = useNavigate()
    return(
        <>
            <button onClick={()=>{navigate(`/profile`)}}>Save changes</button>
        </>
    )
}

