import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { useStores } from "../../stores/root-store-context.ts";
import { observer } from "mobx-react-lite";

const Header: React.FC = observer(() => {
    const {
        header: { isMenuOpen, toggleMenu, closeMenu },
        token: { token },
    } = useStores();

    const isLoggedIn = !!token;

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.logoWrapper}>
                    <Link to="/"><img src="/logo.png" alt="Логотип" className={s.logo} /></Link>
                </div>

                <nav className={s.navDesktop}>
                    <Link to="/code" className={s.link}>Код</Link>
                    <Link to="/tests" className={s.link}>Тесты</Link>
                    <Link to="/about" className={s.link}>О нас</Link>
                    {isLoggedIn ? (
                        <Link to="/profile" className={s.link}>Личный кабинет</Link>
                    ) : (
                        <>
                            <Link to="/registration" className={s.link}>Регистрация</Link>
                            <Link to="/login" className={s.link}>Вход</Link>
                        </>
                    )}
                </nav>

                <button className={s.burger} onClick={toggleMenu}>
                    <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="40"
                        height="40"
                        className={s.icon}
                    >
                        <path d="M8 12h32M8 24h32M8 36h32" />
                    </svg>
                </button>
            </div>

            <div className={`${s.navMobileWrapper} ${isMenuOpen ? s.open : ''}`}>
                <nav className={s.navMobile}>
                    <Link to="/code" className={s.link} onClick={closeMenu}>Код</Link>
                    <Link to="/tests" className={s.link} onClick={closeMenu}>Тесты</Link>
                    <Link to="/about" className={s.link} onClick={closeMenu}>О нас</Link>
                    {isLoggedIn ? (
                        <Link to="/profile" className={s.link} onClick={closeMenu}>Личный кабинет</Link>
                    ) : (
                        <>
                            <Link to="/registration" className={s.link} onClick={closeMenu}>Регистрация</Link>
                            <Link to="/login" className={s.link} onClick={closeMenu}>Вход</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
});

export default Header;
