import React, { useState } from "react";
import { AppContext, AppContextType, Todo } from "./AppContext";

export const AppContextProvider = ({ children }: any) => {
    const [color, setColor] = useState<string>("grey");
    const [valueInput, setValueInput] = useState<string>("");
    const [city, setCity] = useState<string>("Все города");
    const [description, setDescription] = useState<string>(" ");
    const [data, setData] = useState<Todo[]>(
        [
            { id: 1, todo: "Убраться в доме", isCompleted: true },
            { id: 2, todo: "Купить чайник", isCompleted: false },
        ],
    );

    const contextValue: AppContextType = {
        color,
        setColor,
        data,
        setData,
        city,
        setCity,
        description,
        setDescription,
        valueInput,
        setValueInput,
    };
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};