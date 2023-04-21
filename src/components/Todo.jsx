import React, { useState } from "react";
import {useDispatch} from "react-redux"
import TodoItem from "./TodoItem";
import { addTodo } from "../action";
const Todo = () =>{
    const [inputData,setInputData] = useState("")
    const [inputType,setInputType] = useState("")
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
                            value={inputData}
                            onChange={(event)=>setInputData(event.target.value)}
                        /> 
                        <br />
                        <select value={inputType} onChange={(event) => setInputType(event.target.value)}>
                            <option value="">---Выберите тип---</option>
                            <option value="events">Мероприятие</option>
                            <option value="reminder">Напоминание</option>
                            <option value="task">Задача</option>
                        </select>
                        <br />
                        <button onClick={() => dispatch(addTodo(inputData,inputType),setInputData(""),setInputType(""))}>Добавить</button>
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