import { makeAutoObservable } from "mobx";
import Cookies from "js-cookie";

class TokenStore {
    token: string = Cookies.get('jwt') || '';
    userId: string | null = null;
    roles: string[] = [];
    isAdmin: boolean = false;

    constructor() {
        makeAutoObservable(this);
        this.decodeToken();
    }

    setToken = (newToken: string): void => {
        this.token = newToken;
        Cookies.set('jwt', newToken, { secure: true, sameSite: 'Strict' });
        this.decodeToken();
    };

    clearToken = (): void => {
        this.token = '';
        Cookies.remove('jwt');
        this.userId = null;
        this.roles = [];
        this.isAdmin = false;
    };

    decodeToken = (): void => {
        if (!this.token) return;

        try {
            const payload = JSON.parse(atob(this.token.split('.')[1]));
            this.userId = payload._id || null;
            this.roles = Array.isArray(payload.roles) ? payload.roles : [];
            this.isAdmin = this.roles.includes('ADMIN');
        } catch (error) {
            console.error("Ошибка при декодировании токена:", error);
            this.clearToken();
        }
    };

    getID = (): string | null => {
        return this.userId;
    };

    hasRole = (role: string): boolean => {
        return this.roles.includes(role);
    };
}

export default new TokenStore();
