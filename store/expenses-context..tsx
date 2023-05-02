import {createContext, useReducer} from "react";
import {EXPENSES} from "../data/expenses";

type UpdateExpense = {
    name: string,
    price: number,
    date: any
}

type Expense = {
    id: number,
    name: string,
    price: number,
    date: string
}

type InitialStateType = {
    expenses: Expense[],
    addExpense: (arg0: Expense) => void;
    deleteExpense: (arg0: number) => void;
    updateExpense: (arg0: number, arg1: UpdateExpense) => void;
}

export const ExpensesContext = createContext<InitialStateType>({
    expenses: [],
    addExpense: ({id, name, price, date}) => {
    },
    deleteExpense: (id) => {
    },
    updateExpense: (id, {name, price, date}) => {
    }
});

const ExpensesReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD":
            return [{...action.payload}, ...state];
        case "UPDATE":
            return [...state.filter((el: Expense) => el.id !== action.payload.id),
                {id: action.payload.id, ...action.payload.content}]
        case "DELETE":
            return [...state.filter((el: Expense) => el.id !== action.payload.id)]
        default:
            return state;
    }
}

// @ts-ignore
const ExpensesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ExpensesReducer, EXPENSES);

    const addExpense = ({id, name, price, date}: Expense) => {
        dispatch({type: "ADD", payload: {id, name, price, date}})
    }

    const updateExpense = (id: number, {name, price, date}: UpdateExpense) => {
        dispatch({type: "UPDATE", payload: {id, content: {name, price, date}}})
    }

    const deleteExpense = (id: number) => {
        dispatch({type: "DELETE", payload: {id}})
    }
    
    const value = {
        expenses: state,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export {ExpensesProvider}