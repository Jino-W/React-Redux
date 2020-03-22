
const filterTodos = (action, userTodos)=>{
    return{
        type: action.toUpperCase(),
        payload: userTodos
    }
}

export default filterTodos