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
                    <button className={s.searchButton}>Искать</button>
                </div>

                <div className={`${s.hints} ${animateHints ? s.hintsVisible : ''}`}>
                    <div className={s.hintBox}>Спросите код у преподавателя</div>
                    <div className={s.hintBox}>Каждому тесту соответствует уникальный код</div>
                    <div className={s.hintBox}>Код может быть использован только один раз</div>
                    <div className={s.hintBox}>Проверьте правильность ввода перед отправкой</div>
                </div>
            </div>
        </div>
    );
};

export default Code;
