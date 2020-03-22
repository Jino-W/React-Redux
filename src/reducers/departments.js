const departmentsInitialState = [
    {id:1, name: "transport"},
    {id:2, name: "sales"},
    {id:3, name: "HR"},
    {id:4, name: "service"},
]


const departmentsReducer = (state= departmentsInitialState, action)=>{
    switch (action.type) {
        case 'GET_DEPARTMENTS':{
            return [...state]
        }
        default:{
            return [...state]
        }
    }
}


export default departmentsReducer