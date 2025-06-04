import React from 'react';
import {Route, Routes} from "react-router-dom";
import Admin from "../pages/admin/AdminPage.tsx";
import NotFound from "../pages/user/NotFoundPage.tsx";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Admin />} />

            {/* Перенаправление для несуществующих страниц */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AdminRoutes;