const showEmployeeInitial = {}

const showEmployeeReducer = (state= showEmployeeInitial, action)=>{
    switch (action.type) {
        case 'SHOW_EMPLOYEE':{
            const employee = [...action.payload.employees].find(employee=>{
                return employee.id == action.payload.employeeId && employee.department == action.payload.departmentId
            })
            return employee != undefined ? employee : null
        }
        default:{
            return {...state}
        }
    }
}

export default showEmployeeReducer