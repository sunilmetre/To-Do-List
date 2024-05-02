// Initial state for todo list
const initialData ={
    list: []
}

// Reducer function for managing todo list state
const todoReducers = (state=initialData, action) =>{
    switch(action.type){
        case "Add_TODO":

        // Destructure id and data from action payload
        const {id, data} = action.payload;

        // Return updated state with new todo item added
        return{
            ...state,
            list: [
                ...state.list,
                {
                    id: id,
                    data: data
                }
            ]
        }

        case "DELETE_TODO":
             // Filter out the todo item to be deleted
            const newList = state.list.filter((elem) => elem.id !== action.id)
         
        // Return updated state with deleted todo item removed
        return{
            ...state,
            list: newList
        }

        case "REMOVE_TODO":
            // Clear the entire todo list
            return{
                ...state,
                list: []
            }

        // Return current state if action type doesn't match
        default:  return state;
    }
}

export default todoReducers;