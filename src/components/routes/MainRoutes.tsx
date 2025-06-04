import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/user/MainPage.tsx";
import ProtectedRoute from "../ProtectedRoute.tsx";
import Registration from "../pages/user/RegistrationPage.tsx";
import Login from "../pages/user/LoginPage.tsx";
import Account from "../pages/user/AccountPage.tsx";
import NotFound from "../pages/user/NotFoundPage.tsx";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            {/* Публичные маршруты для регистрации и входа */}
            <Route element={<ProtectedRoute isProtected={false} redirectTo="/account" />}>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Защищенные маршруты для обычных пользователей */}
            <Route element={<ProtectedRoute isProtected={true} redirectTo="/registration" />}>
                <Route path="/account" element={<Account />} />
            </Route>

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;