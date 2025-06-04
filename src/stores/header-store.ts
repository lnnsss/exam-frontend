import { makeAutoObservable } from "mobx";

class HeaderStore {
    isMenuOpen: Boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    toggleMenu = (): void => {
        this.isMenuOpen = !this.isMenuOpen
    }
    closeMenu = (): void => {
        this.isMenuOpen = false;
    }
}

export default new HeaderStore()