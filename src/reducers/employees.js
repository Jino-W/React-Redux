const employeesInitialState=[
    {id:1, name: "jino", department: 2},
    {id:2, name: "minu", department: 2},
    {id:1, name: "sam", department: 1},
    {id:3, name: "jim", department: 1},
    {id:3, name: "deeksha", department: 2},
    {id:2, name: "deepika", department: 1},
]

const employeesReducer = (state= employeesInitialState, action)=>{
    switch (action.type) {
        case "GET_EMPLOYEES":{
            return [...state]
        }
        default:{
            return [...state]
        }
    }
}

export default employeesReducer