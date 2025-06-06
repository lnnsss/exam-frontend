import React from "react"
import { Helmet } from "react-helmet-async";
import Registration from "../../Registration/Registration.tsx";

const RegistrationPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Регистрация</title>
            </Helmet>
            <Registration />
        </>
    )
}
export default RegistrationPage