import { makeAutoObservable } from "mobx";

class ModalStore {
    isModalActive: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    // Закрыть модальное окно
    closeModals = (): void => {
        this.isModalActive = false
    }
}

export default new ModalStore()