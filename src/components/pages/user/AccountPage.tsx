import React from "react"
import { Helmet } from "react-helmet-async";
import Account from "../../Account/Account.tsx";

const AccountPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Личный кабинет</title>
            </Helmet>
            <Account />
        </>
    )
}
export default AccountPage