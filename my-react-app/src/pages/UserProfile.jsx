import {useNavigate,Link} from "react-router-dom";
import {useState} from "react";



function UserProfile(){
    const [onChange, setOnchange] = useState(true)
    const navigate = useNavigate()
    return (

        <div className={"profile"}>
            Твой профиль
            <Link onClick={()=>{setOnchange(false)}} to={"/profile/edit"}><p>Изменить</p></Link>
            <div className={"body-prof"}>
                <div className={"left"}>
                    <img alt={"Типо фотка"}/>
                    <p>IM</p>
                </div>
                <div className={"right"}>
                    <input disabled={onChange} type="text" placeholder="Name"/>
                    <input disabled={onChange} type="text" placeholder="Email"/>
                    <button onClick={() => {
                        navigate('/feedback')
                    }}>Form
                    </button>
                </div>
            </div>


        </div>

    )
}

export default UserProfile;