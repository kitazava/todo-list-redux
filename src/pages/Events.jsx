import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/style.css"
import { deleteTodo } from "../action";
const Events = () =>{
    const list = useSelector((state)=> state.todoReducers.list)
    const lE = list.filter((elem) => elem.type === "events")
    const dispatch = useDispatch()
    return(
        <div className="todo_list">
            {
                lE.map((el) =>{
                    return (
                        <p key={el.id}>{el.value} <button onClick={() => dispatch(deleteTodo(el.id))}>Удалить</button></p>
                    )
                })
                
            }
        </div>
    )
}

export default Events