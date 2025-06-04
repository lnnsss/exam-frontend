import React from "react";
import Modal from "./UI/Modal/Modal.tsx";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores/root-store-context";

const Modals: React.FC = observer(() => {
    const { modal: {  } } = useStores();

    return (
        <Modal>
        </Modal>
    )
})

export default Modals