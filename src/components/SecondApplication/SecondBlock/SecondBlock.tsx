import React, { FC, useContext, useEffect, useState } from "react";
import s from "./SecondBlock.module.css";
import { AppContext, Todo } from "../../../Context/AppContext";

type SecondBlockProps = {
    onlyRead?: boolean
}
const SecondBlock: FC<SecondBlockProps> = ({
                                               onlyRead = false,
                                           }) => {
    const [input, setInput] = useState<string>("");
    const { data, setData }: any = useContext(AppContext);
    useEffect(() => console.log(data), [data]);

    const addTodo = () => {
        if (input !== "") {
            setData([...data, { id: Math.random(), todo: input, isCompleted: false }]);
            setInput("");
        }
        ;
    };
    const deleteTodo = (id: number) => {
        setData(data.filter((el: any) => el.id !== id));
    };

    const editTodo = (id: number, value: string) => {
        setData((prevData: Todo[]) =>
            prevData.map((el) =>
                el.id === id ? { ...el, todo: value } : el,
            ),
        );
    };
    const handleToggleComplete = (id: number) => {
        setData((prevData: Todo[]) =>
            prevData.map((el) =>
                el.id === id ? { ...el, isCompleted: !el.isCompleted } : el,
            ),
        );
    };

    return <>
        {
            onlyRead ? <> </> :
                <>
                    <input type="text" value={input} onChange={(e) => setInput(e.currentTarget.value)} />
                    <button className={s.addButton} onClick={addTodo}>Добавить</button>
                </>
        }
        <div className={s.todo}>
            {data.map((el: Todo) =>
                <div className={s.todoElement} key={el.id}>
                    <input type="checkbox" name={"Выполнено"} checked={el.isCompleted}
                           onChange={() => {
                               if (!onlyRead) {
                                   handleToggleComplete(el.id);
                               }
                           }
                           } />
                    {
                        onlyRead ?
                            <label>
                                {el.todo}
                            </label>
                            :
                            <>
                                <input
                                    type="text"
                                    value={el.todo}
                                    onChange={(e) => editTodo(el.id, e.currentTarget.value)}
                                />
                                <button onClick={() => deleteTodo(el.id)}>Удалить</button>
                            </>
                    }
                </div>,
            )}
        </div>

    </>;
};

export default SecondBlock;