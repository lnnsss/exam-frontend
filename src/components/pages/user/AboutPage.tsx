import React from "react"
import { Helmet } from "react-helmet"
import About from "../../About/About.tsx";

const AccountPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>О нас</title>
            </Helmet>
            <About />
        </>
    )
}
export default AccountPage