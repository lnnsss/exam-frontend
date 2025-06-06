import React from "react"
import { Helmet } from "react-helmet-async";
import Login from "../../Login/Login.tsx";

const LoginPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Вход</title>
            </Helmet>
            <Login />
        </>
    )
}
export default LoginPage