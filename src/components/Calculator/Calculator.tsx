import { useState } from "react";
import s from "./Calculator.module.css";
import { useParams } from "react-router-dom";

const Calculator = () => {
    const [value1, setValue1] = useState<string>("");
    const { value2 } = useParams();
    const [result, setResult] = useState<number>();

    const handleOperation = (operation: string) => {
        const num1 = parseFloat(value1);
        let num2: number;
        let resultTemp: number;
        if (typeof value2 === "string") {
            num2 = parseFloat(value2);
            switch (operation) {
                case "+":
                    resultTemp = num1 + num2;
                    break;
                case "-":
                    resultTemp = num1 - num2;
                    break;
                case "*":
                    resultTemp = num1 * num2;
                    break;
                case "/":
                    resultTemp = num1 / num2;
                    break;
                default:
                    console.log("Error");
                    return;
            }
            setResult(resultTemp);
        }

    };

    return (
        <div className={s.body}>
            <input type="number" value={value1} onChange={(e) => {
                setValue1(e.currentTarget.value);
            }} />
            <div className={s.menuButtons}>
                <button onClick={() => handleOperation("+")}>+</button>
                <button onClick={() => handleOperation("-")}>-</button>
                <button onClick={() => handleOperation("*")}>*</button>
                <button onClick={() => handleOperation("/")}>/</button>
            </div>
            <div>
                <label>Итог: </label>
                <input type="number" value={result} />
            </div>

        </div>
    );
};

export default Calculator;