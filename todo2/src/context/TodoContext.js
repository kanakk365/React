import {useContext, createContex } from "react"

export const TodoContext=createContex({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            complete:false
        },
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider