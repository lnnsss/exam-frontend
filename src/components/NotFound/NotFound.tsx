import React from 'react';
import s from "./NotFound.module.css"
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={s.notFound}>
            <div className={`__container ${s.notFound__container}`}>
                <img src="/404.png" alt="404" />
                <span>Страница не найдена</span>
                <Link to="/" className={s.notFound__link}>На главную</Link>
            </div>
        </div>
    );
};

export default NotFound;