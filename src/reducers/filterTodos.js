
const filterTodosInitialState=[]

const filterTodosReducer = (state= filterTodosInitialState, action)=>{
    switch (action.type) {
        case "ALL":{
            return [...action.payload]
        }
        case "COMPLETED":{
            return [...action.payload].filter(todo=> todo.completed == true)
        }
        case "INCOMPLETE":{
            return [...action.payload].filter(todo=> todo.completed == false)
        }
        default:{
            return [...state]
        }
    }
}

export default filterTodosReducer