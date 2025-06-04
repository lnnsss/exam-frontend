import React from 'react';
import {Helmet} from "react-helmet";
import Admin from "../../Admin/Admin.tsx";

const AdminPage = () => {
    return (
        <>
            <Helmet>
                <title>Админка</title>
            </Helmet>
            <Admin/>
        </>
    );
};

export default AdminPage;