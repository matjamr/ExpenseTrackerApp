interface Expense {
    id: number,
    name: string ,
    price: number ,
    date: string
}

export const EXPENSES: Expense[] = [
    {
        id: 1,
        name: "A book",
        price: 18.47,
        date: "2023-05-01"
    },
    {
        id: 2,
        name: "A book",
        price: 18.47,
        date: '2023-05-02'
    },
    {
        id: 3,
        name: "Another book",
        price: 20.47,
        date: "2022-2-19"
    },
    {
        id: 4,
        name: "Another book",
        price: 18.47,
        date: "2022-1-18"
    },
    {
        id: 5,
        name: "A book",
        price: 18.47,
        date: "2022-2-18"
    },
    {
        id: 6,
        name: "Another book",
        price: 20.47,
        date: "2022-3-19"
    },
    {
        id: 7,
        name: "Another book",
        price: 18.47,
        date: "2022-1-21"
    }
]