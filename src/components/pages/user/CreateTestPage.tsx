import React from "react"
import { Helmet } from "react-helmet"
import CreateTest from "../../CreateTest/CreateTest.tsx";

const CreateTestPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Создать тест</title>
            </Helmet>
            <CreateTest />
        </>
    )
}
export default CreateTestPage