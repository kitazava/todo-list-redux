export const addTodo =(value,type) =>{
    return{
        type: "ADD_TODO",
        payload:{
            id: Math.random(),
            value: value,
            type: type
        }
    }
}

export const deleteTodo = (id) =>{
    return{
        type: "DELETE_TODO",
        id
    }
}

export const editTodo = (id, value) =>{
    return{
        type: "EDIT_TODO",
        id
    }
}