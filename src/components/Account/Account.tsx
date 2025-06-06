import React, { useEffect } from 'react';
import s from "./Account.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/root-store-context.ts";
import axios from "axios";
import { apiUsersURL } from "../../configs/constants.ts";
import { useNavigate } from "react-router-dom";

const Account = observer(() => {
    const {
        token: { getID, clearToken, token },
        user
    } = useStores();

    const { name, lastName, avatarUrl, clearUser } = user;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const id = getID();
                const res = await axios.get(`${apiUsersURL}/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                user.setUser({
                    id: res.data.id,
                    email: res.data.email,
                    name: res.data.name,
                    lastName: res.data.last_name,
                    avatarUrl: res.data.avatar_url || "",
                    isAdmin: res.data.is_admin,
                    createdAt: res.data.created_at ? new Date(res.data.created_at) : null,
                });
            } catch (err) {
                console.error("Ошибка при получении пользователя:", err);
            }
        };

        fetchUser();
    }, [getID, token, user]);

    const getInitials = () => {
        const n = name?.trim();
        const ln = lastName?.trim();
        if (!n || !ln) return "";
        return `${n[0]}${ln[0]}`.toUpperCase();
    };

    const handleLogout = () => {
        clearToken();
        clearUser();
        navigate('/registration');
    };

    return (
        <div className={s.account}>
            <div className={`__container ${s.account__container}`}>
                <h2 className={s.account__title}>Личный кабинет</h2>

                <div className={s.account__avatar}>
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="avatar" />
                    ) : (
                        <div className={s.account__initials}>{getInitials()}</div>
                    )}
                </div>

                <div className={s.account__item}>Имя: <strong>{name}</strong></div>
                <div className={s.account__item}>Фамилия: <strong>{lastName}</strong></div>

                <button disabled className={s.account__button}>Редактировать профиль</button>
                <button onClick={handleLogout} className={s.account__button}>Выйти</button>
            </div>
        </div>
    );
});

export default Account;
