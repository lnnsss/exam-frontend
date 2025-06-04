import React from "react"
import { Helmet } from "react-helmet"
import Code from "../../Code/Code.tsx";

const CodePage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Введите код</title>
            </Helmet>
            <Code />
        </>
    )
}
export default CodePage