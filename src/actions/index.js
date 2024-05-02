// Action creator function to add a new todo item
export const addTodo = (data) =>{
    return{
        type: "Add_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

// Action creator function to delete a todo item
export const deleteTodo = (id) =>{
    return{
        type: "DELETE_TODO",
        id
    }
}

// Action creator function to remove all todo items
export const removeTodo = () => {
    return{
        type: "REMOVE_TODO"
    }
}