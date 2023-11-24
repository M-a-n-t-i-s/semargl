import React, { useContext } from "react";
import s from "./FirstApplication.module.css";
import { AppContext } from "../../Context/AppContext";

const FirstApplication = () => {
    const { setColor }: any = useContext(AppContext);
    const { valueInput, setValueInput }: any = useContext(AppContext);

    return <div className={s.main}>
        <div className={s.blockButtons}>
            <button className={s.redButton} onClick={() => setColor("red")}>Красный</button>
            <button className={s.greenButton} onClick={() => setColor("green")}>Зеленый</button>
            <button className={s.blueButton} onClick={() => setColor("blue")}>Синий</button>
        </div>
        <input type="text" value={valueInput} onChange={(e) => setValueInput(e.currentTarget.value)} />
    </div>;
};

export default FirstApplication;