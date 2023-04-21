import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { deleteTodo } from "../action";
const TodoItem = () =>{
    const list = useSelector((state)=> state.todoReducers.list)
    const dispatch = useDispatch()
    return(
        <div>
            <div className="todo_list">
                {
                    list.map((elem)=>(
                        
                            <span key={elem.id}>
                            <p>{elem.value}</p>
                            <button onClick={() => dispatch(deleteTodo(elem.id))}>Удалить</button>
                            </span>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default TodoItem