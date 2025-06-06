import { makeAutoObservable } from "mobx";

interface IUser {
    id: number | null;
    email: string;
    name: string;
    lastName: string;
    avatarUrl: string | null;
    isAdmin: boolean;
    createdAt: Date | null;
}

class UserStore {
    id: number | null = null;
    email: string = '';
    name: string = '';
    lastName: string = '';
    avatarUrl: string | null = null;
    isAdmin: boolean = false;
    createdAt: Date | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: IUser) {
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.lastName = user.lastName;
        this.avatarUrl = user.avatarUrl;
        this.isAdmin = user.isAdmin;
        this.createdAt = user.createdAt;
    }

    setName(newName: string): void {
        this.name = newName;
    }

    setLastName(newLastName: string): void {
        this.lastName = newLastName;
    }

    setAvatarUrl(newUrl: string | null): void {
        this.avatarUrl = newUrl;
    }

    setIsAdmin(flag: boolean): void {
        this.isAdmin = flag;
    }

    setEmail(newEmail: string): void {
        this.email = newEmail;
    }

    setCreatedAt(date: Date | null): void {
        this.createdAt = date;
    }

    clearUser() {
        this.id = null;
        this.email = '';
        this.name = '';
        this.lastName = '';
        this.avatarUrl = null;
        this.isAdmin = false;
        this.createdAt = null;
    }
}

export default new UserStore();
