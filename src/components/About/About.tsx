import React from 'react';
import s from "./About.module.css";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={s.about}>
            <div className={`__container ${s.about__container}`}>
                <h1 className={s.title}>О нас</h1>
                <p className={s.subtitle}>
                    Наша платформа позволяет каждому авторизованному пользователю легко создавать тесты, экзамены и викторины для студентов.
                </p>

                <div className={s.features}>
                    <div className={s.feature}>
                        <h3>Интерактивные тесты</h3>
                        <p>Создавайте викторины с таймером, изображениями и баллами. Все просто и понятно.</p>
                    </div>
                    <div className={s.feature}>
                        <h3>Для преподавателей и студентов</h3>
                        <p>Инструмент одинаково полезен как для учителей, так и для самостоятельной подготовки студентов.</p>
                    </div>
                    <div className={s.feature}>
                        <h3>Удобство и скорость</h3>
                        <p>Быстрое создание, удобная статистика и мгновенная проверка результатов.</p>
                    </div>
                </div>

                <div className={s.howItWorks}>
                    <h2>Как это работает?</h2>
                    <ol>
                        <li>Авторизуйтесь на платформе</li>
                        <li>Создайте свой первый тест</li>
                        <li>Поделитесь ссылкой со студентами</li>
                        <li>Получите результаты и аналитику</li>
                    </ol>
                </div>

                <div className={s.cta}>
                    <Link to='/tests/create' className={s.ctaButton}>Создать тест</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
