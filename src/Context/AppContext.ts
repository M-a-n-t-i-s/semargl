import React, { Dispatch, SetStateAction } from "react";

export interface AppContextType {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
    data: Todo[];
    setData: Dispatch<SetStateAction<Todo[]>>;
    setCity: Dispatch<SetStateAction<string>>;
    city: string;
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
    setValueInput: Dispatch<SetStateAction<string>>;
    valueInput: string;
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined);

export interface Todo {
    id: number;
    todo: string;
    isCompleted: boolean;
}

