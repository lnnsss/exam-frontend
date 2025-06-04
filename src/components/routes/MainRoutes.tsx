import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute.tsx";
import Main from "../pages/user/MainPage.tsx";
import Code from "../pages/user/CodePage.tsx";
import About from "../pages/user/AboutPage.tsx";
import Registration from "../pages/user/RegistrationPage.tsx";
import Login from "../pages/user/LoginPage.tsx";
import Account from "../pages/user/AccountPage.tsx";
import NotFound from "../pages/user/NotFoundPage.tsx";
import Tests from "../pages/user/TestsPage.tsx";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/code" element={<Code />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/about" element={<About />} />

            {/* Публичные маршруты для регистрации и входа */}
            <Route element={<ProtectedRoute isProtected={false} redirectTo="/profile" />}>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* Защищенные маршруты для обычных пользователей */}
            <Route element={<ProtectedRoute isProtected={true} redirectTo="/registration" />}>
                <Route path="/profile" element={<Account />} />
            </Route>

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;