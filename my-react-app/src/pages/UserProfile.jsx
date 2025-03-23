import {useNavigate,Link} from "react-router-dom";
import {useContext, useState} from "react";
import {ThemeContext} from "../components/ThemeContext.jsx";



function UserProfile(){
    const [onChange, setOnchange] = useState(true)
    const navigate = useNavigate()
    const {Theme, setTheme, switchTheme} = useContext(ThemeContext)

    const handleSwitchTheme = () =>{
        console.log(Theme)
        if (Theme ==='dark') {
            setTheme("light")
        } else{
            setTheme("dark")
        }
    }

    return (

        <div className="profile-page">
            <h1 className="profile-title">Твой профиль</h1>
            <Link
                className="edit-link"
                to="/profile/edit"
                onClick={() => setOnchange(false)}
            >
                <p>Изменить</p>
            </Link>
            <div className="profile-body">
                <div className="profile-left">
                    <img
                        className="profile-image"
                        src="https://via.placeholder.com/150" // Замените на реальный источник изображения
                        alt="Фото профиля"
                    />
                    <p className="profile-username">Имя пользователя</p>
                </div>
                <div className="profile-right">
                    <input
                        className="profile-input"
                        disabled={onChange}
                        type="text"
                        placeholder="Имя"
                    />
                    <input
                        className="profile-input"
                        disabled={onChange}
                        type="text"
                        placeholder="Email"
                    />
                    <button
                        className="profile-button"
                        onClick={() => navigate("/feedback")}
                    >
                        Форма обратной связи
                    </button>
                </div>
            </div>
            <button className="theme-button" onClick={handleSwitchTheme}>
                Сменить тему
            </button>
        </div>
    );
};



export default UserProfile;