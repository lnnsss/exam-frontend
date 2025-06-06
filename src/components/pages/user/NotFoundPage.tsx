import React from "react"
import { Helmet } from "react-helmet-async";
import NotFound from "../../NotFound/NotFound.tsx";

const MainPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>404</title>
            </Helmet>
            <NotFound />
        </>
    )
}
export default MainPage