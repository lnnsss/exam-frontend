import { makeAutoObservable } from "mobx";
import axios from "axios";
import {apiTestsURL} from "../configs/constants.ts";

export interface ITest {
    id: number;
    title: string;
    authorId: number;
    authorName: string;
    authorLastName: string;
    accessCode: string;
    createdAt: Date | null;
}

class TestStore {
    tests: ITest[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setTests = (newTests: ITest[]): void => {
        this.tests = newTests.map(test => ({
            ...test,
            createdAt: test.createdAt ? new Date(test.createdAt) : null,
        }));
    };

    fetchTests = async (): Promise<void> => {
        try {
            const response = await axios.get(apiTestsURL);
            this.setTests(response.data);
        } catch (error) {
            console.error("Ошибка загрузки тестов:", error);
        }
    };

    addTest = (test: ITest): void => {
        this.tests.push(test);
    };

    clearTests = (): void => {
        this.tests = [];
    };
}

export default new TestStore();
