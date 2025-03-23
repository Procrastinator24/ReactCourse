import React, { useState } from 'react';
import {createClient} from "@supabase/supabase-js";
import { useNavigate } from 'react-router-dom';

const supbaseUrl = "https://rngeexylxgmfqpdtnwuf.supabase.co"
const supbaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZ2VleHlseGdtZnFwZHRud3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NDg4NTUsImV4cCI6MjA1NzUyNDg1NX0.XiH_xyosSslDqyaZkueJ1Xja9v4w6lXblmLhxV6Ke4A"
const supbase = createClient(supbaseUrl, supbaseKey)



function Form() {
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            let response;
            if (isLogin) {
                // Авторизация
                response = await supbase.from("users").select("*").eq("email", email).single();
            } else {
                // Регистрация
                response  = await supbase.from("users").insert([{name, email, password}]).select();
                //if(response.error) console.error(response.error);
                // response = await supbase.auth.signUp({
                //     email,
                //     password,
            }

            if (response.error) {

                setError(response.error.message);
            } else {
                setSuccessMessage(
                    isLogin
                        ? "Вы успешно авторизовались!"
                        : "Регистрация прошла успешно! Проверьте вашу почту."
                )
                navigate("/home")
            }
        } catch (err) {
            setError("Произошла ошибка. Попробуйте снова.", err);
        }
    };


    return (
        <div className={"listOfthingsP1"}>
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin &&
                    <div>
                        <label>Имя: </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                }
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <button type="submit">{isLogin ? "Войти" : "Зарегистрироваться"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войдите"}
            </button>
        </div>
    );
}

export default Form;