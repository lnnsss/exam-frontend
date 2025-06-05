import React, { useEffect, useState } from 'react';
import s from "./Code.module.css";

const Code = () => {
    const [animateHints, setAnimateHints] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setAnimateHints(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={s.code}>
            <div className={`__container ${s.code__container}`}>
                <h2 className={s.animatedTitle}>Введите код</h2>

                <div className={s.inputGroup}>
                    <input
                        type="text"
                        className={s.codeInput}
                        placeholder="ABC123"
                    />
                    <button className={s.searchButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#ffffff"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon icon-search">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>

                <div className={`${s.hints} ${animateHints ? s.hintsVisible : ''}`}>
                    <div className={s.hintBox}>Спросите код у преподавателя</div>
                    <div className={s.hintBox}>Каждому тесту соответствует уникальный код</div>
                    <div className={s.hintBox}>Проверьте правильность ввода перед отправкой</div>
                </div>
            </div>
        </div>
    );
};

export default Code;
