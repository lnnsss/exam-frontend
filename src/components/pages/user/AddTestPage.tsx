import React from "react"
import { Helmet } from "react-helmet-async";
import AddTest from "../../AddTest/AddTest.tsx";

const AddTestPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Создать тест</title>
            </Helmet>
            <AddTest />
        </>
    )
}
export default AddTestPage