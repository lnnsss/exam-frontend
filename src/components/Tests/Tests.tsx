import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Tests.module.css";
import { useStores } from "../../stores/root-store-context.ts";

const Tests = () => {
    const {
        token: { getID },
        test: { tests, fetchTests },
    } = useStores();

    const currentUserId = getID();
    const [filter, setFilter] = useState<"mine" | "others">("mine");

    useEffect(() => {
        fetchTests();
    }, [fetchTests]);

    const filteredTests =
        filter === "mine"
            ? tests.filter((t) => t.authorId === currentUserId)
            : tests.filter((t) => t.authorId !== currentUserId);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Код скопирован: " + text);
    };

    return (
        <div className={s.tests}>
            <div className={`__container ${s.tests__container}`}>
                <h2 className={s.tests__title}>Тесты</h2>

                <div className={s.tests__controls}>
                    <button
                        className={`${s.tests__btn} ${filter === "mine" ? s.active : ""}`}
                        onClick={() => setFilter("mine")}
                    >
                        Мои тесты
                    </button>
                    <button
                        className={`${s.tests__btn} ${filter === "others" ? s.active : ""}`}
                        onClick={() => setFilter("others")}
                    >
                        Чужие тесты
                    </button>

                    <Link to="/tests/add" className={s.tests__btnCreate}>
                        Создать тест
                    </Link>
                </div>

                <div className={s.tests__list}>
                    {filteredTests.length === 0 ? (
                        <p className={s.tests__empty}>Тесты не найдены</p>
                    ) : (
                        filteredTests.map((test) => (
                            <div key={test.id} className={s.tests__card}>
                                <h3 className={s.tests__cardTitle}>{test.title}</h3>
                                <p className={s.tests__cardInfo}>
                                    Автор: {test.authorName} {test.authorLastName}
                                    <br />
                                    Код доступа:{" "}
                                    <span
                                        className={s.accessCode}
                                        onClick={() => copyToClipboard(test.accessCode)}
                                        title="Нажмите чтобы скопировать"
                                    >
                                        {test.accessCode}
                                    </span>
                                    <br />
                                    Создан:{" "}
                                    {test.createdAt
                                        ? test.createdAt.toLocaleDateString("ru-RU")
                                        : "—"}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tests;
