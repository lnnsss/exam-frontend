import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./Login.module.css";

const Login: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Логика входа
        console.log('Вход:', form);
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
