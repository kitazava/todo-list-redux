import React, { useState } from "react";
import {useDispatch} from "react-redux"
import TodoItem from "./TodoItem";
import { addTodo } from "../action";
const Todo = () =>{
    const [newItem,setNewItem] = useState("")
    const [newType,setNewType] = useState("")
    const dispatch = useDispatch()
    return(
        <div className="todo">
        <div className="container">
            <div className="todo_block">
                <div className="todo_main">
                    <div className="todo_content">
                        <h1>Todo List</h1>
                        <input 
                            type="text"
                            value={newItem}
                            onChange={(event)=>setNewItem(event.target.value)}
                        /> 
                        <br />
                        <select value={newType} onChange={(event) => setNewType(event.target.value)}>
                            <option value="">---Выберите тип---</option>
                            <option value="events">Мероприятие</option>
                            <option value="reminder">Напоминание</option>
                            <option value="task">Задача</option>
                        </select>
                        <br />
                        <button onClick={() => dispatch(addTodo(newItem,newType),setNewItem(""),setNewType(""))}>Добавить</button>
                        <br />
                        <TodoItem  />
                    </div>
                </div>    
            </div>
        </div>
    </div>
    )
}

export default Todo