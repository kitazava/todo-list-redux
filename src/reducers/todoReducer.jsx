const initialData = {
    list: []
}


const todoReducers = (state=initialData, action) =>{
    switch(action.type){
        case "ADD_TODO":
            const {id,value,type} = action.payload

            return{
                ...state, list: [...state.list, { id: id, value: value ,type: type }]
            }
        
            

        case "DELETE_TODO":
            
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return{
                ...state,
                list: newList
            }

        case "EDIT_TODO":
           
            return{
                
                
            }


            
        default: return state 
    }
}

export default todoReducers