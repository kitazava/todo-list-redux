import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "../css/style.css"
import { deleteTodo } from "../action";
const Reminder = () =>{
    const list = useSelector((state)=> state.todoReducers.list)
    const lR = list.filter((elem) => elem.type === "reminder")
    const dispatch = useDispatch()
    return(
        <div className="todo_list">
            {
                lR.map((el) =>{
                    return (
                        <p key={el.id}>{el.value} <button onClick={() => dispatch(deleteTodo(el.id))}>Удалить</button></p>
                    )
                })
                
            }
        </div>
    )
}

export default Reminder