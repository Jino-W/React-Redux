const tasksInitialState= [
    {title:"javascript", body:"weekend assignment", completed: true}
]

const tasksReducer = (state= tasksInitialState, action)=>{
    switch (action.type) {
        case "ADD_TASK":{
            return [...action.payload.tasks, action.payload.newTask]
        }
        case "GET_TASKS":{
            return [...state]
        }
        case "REMOVE_TASK":{
            return [...action.payload.tasks].filter((task, i)=>{
                return i !== action.payload.index
            } )
        }
        case "EDIT_TASK":{
            return [...action.payload.tasks].map(task=>{
                task.completed = action.payload.status
                return task
            })
        }
        default:{
            return [...state]
        }
    }
}

export default tasksReducer