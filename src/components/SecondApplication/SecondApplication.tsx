import React, { useState } from "react";
import s from "./SecondApplication.module.css";
import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlock/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";


const SecondApplication = () => {
    const [block, setBlock] = useState<number>(1);

    return <div className={s.body}>
        <div className={s.navbar}>
            <button onClick={() => setBlock(1)}>Блок 1</button>
            <button onClick={() => setBlock(2)}>Блок 2</button>
            <button onClick={() => setBlock(3)}>Блок 3</button>
        </div>
        {
            {
                1: <FirstBlock />,
                2: <SecondBlock />,
                3: <ThirdBlock />,
            }[block]
        }
    </div>;
};

export default SecondApplication;