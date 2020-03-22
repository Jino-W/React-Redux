export const getTasks=()=>{
    return{
        type: "GET_TASKS",
    }
}

export const addTask=(tasks, newTask)=>{
    return{
        type: "ADD_TASK",
        payload: {
            tasks: tasks,
            newTask: newTask
        }
    }
}


export const removeTask=(tasks, index)=>{
    return{
        type: "REMOVE_TASK",
        payload: {
            tasks: tasks,
            index: index
        }
    }
}

export const editTask=(tasks, status)=>{
    console.log("stsA",status)
    return{
        type: "EDIT_TASK",
        payload: {
            tasks: tasks,
            status: status
        }
    }
}