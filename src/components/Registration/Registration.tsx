import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import s from "./Registration.module.css";
import { apiAuthURL } from "../../configs/constants.ts";
import { useStores } from "../../stores/root-store-context.ts";
import Cookies from "js-cookie";

const Registration: React.FC = () => {
    const navigate = useNavigate();
    const { token: { setToken } } = useStores();

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }

        try {
            const response = await axios.post(`${apiAuthURL}/registration`, {
                email: form.email,
                password: form.password,
                name: form.firstName,
                lastName: form.lastName
            }, {
                withCredentials: true
            });

            const { token, user, message } = response.data;

            setToken(token);
            Cookies.set('jwt', token, { secure: true, sameSite: 'Strict' });

            alert(message);
            navigate('/profile');

        } catch (error: any) {
            const message =
                error?.response?.data?.message || "Произошла ошибка при регистрации.";
            alert(message);
            console.error('Ошибка регистрации:', message);
        }
    };

    return (
        <div className={s.registration}>
            <div className={`__container ${s.registration__container}`}>
                <h1 className={s.title}>Регистрация</h1>
                <form className={s.form} onSubmit={handleSubmit} noValidate>
                    <div className={s.row}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Имя"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            className={s.input}
                            autoComplete="given-name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            className={s.input}
                            autoComplete="family-name"
                        />
                    </div>

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
                        autoComplete="new-password"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Повтор пароля"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        className={s.input}
                        autoComplete="new-password"
                    />

                    <button type="submit" className={s.button}>Зарегистрироваться</button>
                </form>

                <p className={s.text}>
                    Уже зарегистрированы?{' '}
                    <Link to="/login" className={s.link}>Войти</Link>
                </p>
            </div>
        </div>
    );
};

export default Registration;
