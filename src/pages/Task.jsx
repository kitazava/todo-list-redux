import React from "react";
import { useSelector , useDispatch} from "react-redux";
import "../css/style.css"
import { deleteTodo } from "../action";
const Task = () =>{
    const list = useSelector((state)=> state.todoReducers.list)
    const lT = list.filter((elem) => elem.type === "task")
    const dispatch = useDispatch()
    return(
        <div className="todo_list">
            {
                lT.map((el) =>{
                    return (
                        <p key={el.id}>{el.value} <button onClick={() => dispatch(deleteTodo(el.id))}>Удалить</button></p>
                    )
                })
            }
        </div>
    )
}

export default Task