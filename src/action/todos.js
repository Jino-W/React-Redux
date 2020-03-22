import axios from 'axios'
export const getTodos =(todos)=>{
    return{
        type: 'GET_TODOS',
        payload: todos
    }
}


export const resetTodos = ()=>{
    return{
        type: 'RESET_USERS'
    }
}

export const startGetTodos =(userId)=>{
    console.log("userId:", userId)
    return (dispatch)=>{
        axios.get(`http://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response=>{
            const todos= response.data
            console.log("r", response.data)
            dispatch(getTodos(todos))
        })
    }
}