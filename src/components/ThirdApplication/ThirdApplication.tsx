import React, { useContext, useState } from "react";
import s from "./ThirdApplication.module.css";
import FirstBlock from "../SecondApplication/FirstBlock/FirstBlock";
import SecondBlock from "../SecondApplication/SecondBlock/SecondBlock";
import { AppContext } from "../../Context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import Calculator from "../Calculator/Calculator";


const ThirdApplication = () => {
    const { value2 } = useParams();
    let initialValue: number = 1;
    if (value2 !== undefined) {
        initialValue = 2;
    }
    const [block, setBlock] = useState<number>(initialValue);
    const { color }: any = useContext(AppContext);
    const { city }: any = useContext(AppContext);
    const { valueInput }: any = useContext(AppContext);
    const navigate = useNavigate();

    return <div className={s.body}>
        <div className={s.sidebar} style={{
            backgroundColor: color,
        }}>
            <button onClick={() => {
                setBlock(1);
                navigate("/third");
            }}>Подменю 1
            </button>
            <button onClick={() => {
                setBlock(2);
                navigate("/third/4");
            }}>Подменю 2
            </button>
            <button onClick={() => {
                setBlock(3);
                navigate("/third");
            }}>Подменю 3
            </button>
        </div>
        <div className={s.menu}>
            <h1>Подменю {block}</h1>
            <div className={s.menuBody}>
                {
                    {
                        1: <>
                            <h4>{city}</h4>
                            <SecondBlock onlyRead />
                        </>,
                        2:
                            <Calculator />,
                        3: <>
                            <h4>{valueInput}</h4>
                            <FirstBlock onlyRead />
                        </>,
                    }[block]
                }
            </div>
        </div>
    </div>;
};

export default ThirdApplication;