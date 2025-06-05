import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import s from "./Login.module.css";
import { apiAuthURL } from "../../configs/constants.ts";
import Cookies from "js-cookie";
import {useStores} from "../../stores/root-store-context.ts";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { token: { setToken } } = useStores();

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiAuthURL}/login`, {
                email: form.email,
                password: form.password,
            });

            const { token, user, message } = response.data;

            setToken(response.data.token);
            Cookies.set('jwt', response.data.token, { secure: true, sameSite: 'Strict' });

            alert(message);
            navigate('/profile');

        } catch (error: any) {
            const message =
                error?.response?.data?.message || "Ошибка входа. Попробуйте ещё раз.";
            alert(message);
            console.error("Ошибка входа:", message);
        }
    };

    return (
        <div className={s.login}>
            <div className={`__container ${s.login__container}`}>
                <h1 className={s.title}>Вход</h1>
                <form className={s.form} onSubmit={handleSubmit} noValidate>
                    <input
                        type="email"
                        name="email"
                        placeholder="Почта"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={s.input}
                        autoComplete="email"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className={s.input}
                        autoComplete="current-password"
                    />
                    <button type="submit" className={s.button}>Войти</button>
                </form>
                <p className={s.text}>
                    Нет аккаунта?{' '}
                    <Link to="/registration" className={s.link}>Зарегистрироваться</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
