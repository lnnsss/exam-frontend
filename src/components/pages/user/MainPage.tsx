import React from "react"
import { Helmet } from "react-helmet"
import Main from "../../Main/Main.tsx";

const MainPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <Main />
        </>
    )
}
export default MainPage