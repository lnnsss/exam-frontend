import React from "react"
import { Helmet } from "react-helmet"
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