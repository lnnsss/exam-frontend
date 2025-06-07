import React from 'react';
import s from "./Main.module.css";

const Main = () => {
    return (
        <main className={s.main}>

            {/* Картинка с блюром и белым текстом */}
            <section className={s.hero}>
                <img src="/bg1.jpg" alt="Образование" className={s.heroImage} />
                <div className={s.heroOverlay}>
                    <h1 className={s.heroTitle}>Тесты для студентов</h1>
                    <p className={s.heroSubtitle}>От преподавателей. Просто. Удобно. Эффективно.</p>
                </div>
            </section>

            {/* Тёмно-зелёная секция */}
            <section className={s.greenSection}>
                <h2 className={s.sectionTitle}>Как это работает?</h2>
                <p className={s.sectionText}>
                    Преподаватели создают тесты, студенты проходят их онлайн — всё в одном месте, без лишней бюрократии.
                </p>
            </section>

            {/* Белая секция с зелёными блоками */}
            <section className={s.whiteSection}>
                <h2 className={s.sectionTitleGreen}>Возможности платформы</h2>
                <div className={s.blocks}>
                    <div className={s.block}>Создание тестов</div>
                    <div className={s.block}>Отслеживание результатов</div>
                    <div className={s.block}>Автоматическая проверка</div>
                    <div className={s.block}>Групповая статистика</div>
                </div>
            </section>

            {/* Вторая тёмно-зелёная секция */}
            <section className={s.greenSection}>
                <h2 className={s.sectionTitle}>Отзывы студентов</h2>
                <p className={s.sectionText}>
                    “Наконец-то преподаватели начали пользоваться нормальным сервисом. Спасибо!” — Иван, студент ИТ-направления
                </p>
            </section>

            {/* Заключительная секция с изображением */}
            <section className={s.footerImageSection}>
                <img src="/bg7.jpg" alt="Будущее образования" className={s.footerImage} />
                <div className={s.footerOverlay}>
                    <h2 className={s.footerText}>Присоединяйтесь к цифровой трансформации образования</h2>
                </div>
            </section>

        </main>
    );
};

export default Main;
