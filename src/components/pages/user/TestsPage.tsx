import React from "react"
import { Helmet } from "react-helmet"
import Tests from "../../Tests/Tests.tsx";

const TestsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Тесты</title>
            </Helmet>
            <Tests />
        </>
    )
}
export default TestsPage