import React, { FC, useContext } from "react";
import s from "./FirstBlock.module.css";
import { AppContext } from "../../../Context/AppContext";

type SecondBlockProps = {
    onlyRead?: boolean
}

const FirstBlock: FC<SecondBlockProps> = ({
                                              onlyRead = false,
                                          }) => {
    const { city, setCity }: any = useContext(AppContext);
    const { description, setDescription }: any = useContext(AppContext);

    const data = [
        { id: 1, city: "Москва", desc: "Чистый город" },
        { id: 2, city: "Санкт-Петербург", desc: "Красивый город" },
        { id: 3, city: "Казань", desc: "Великолепный город" },
        { id: 4, city: "Пермь", desc: "Исторический город" },
        { id: 5, city: "Тверь", desc: "Прекрасный город" },
        { id: 6, city: "Москва", desc: "Уютный город" },
    ];

    return <>
        {onlyRead ?
            <></>
            :
            <div className={s.blockWithTable}>
                <select value={city} onChange={(e) => setCity(e.currentTarget.value)}>
                    <option value={"Все города"}>Все города</option>
                    <option value={"Москва"}>Москва</option>
                    <option value={"Санкт-Петербург"}>Санкт-Петербург</option>
                    <option value={"Казань"}>Казань</option>
                    <option value={"Пермь"}>Пермь</option>
                    <option value={"Тверь"}>Тверь</option>
                </select>
                <textarea value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
            </div>
        }
        <table>
            <tr>
                <th>ID</th>
                <th>Город</th>
                <th>Описание</th>
            </tr>
            {data.filter(el => (el.city === city || city === "Все города") &&
                (description.split(" ")
                        .filter(
                            (v: any) =>
                                el.desc.toLowerCase().includes(v.toLowerCase())).length === description.split(" ").length
                    || description === " "))
                .map((el) =>
                    <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.city}</td>
                        <td>{el.desc}</td>
                    </tr>)}
        </table>
    </>;

};

export default FirstBlock;