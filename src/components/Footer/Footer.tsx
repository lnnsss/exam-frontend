import React from 'react';
import s from './Footer.module.css';
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.brand}>Exam</div>

                <nav className={s.nav}>
                    <Link to="support" className={s.link}>Поддержка</Link>
                    <Link to="privacy" className={s.link}>Конфиденциальность</Link>
                    <Link to="contact" className={s.link}>Контакты</Link>
                </nav>
            </div>

            <div className={s.copy}>
                © {new Date().getFullYear()} Exam. Все права защищены.
            </div>
        </footer>
    );
};

export default Footer;
