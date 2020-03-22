const showEmployee=(empId, deptId, employees)=>{
    return {
        type: "SHOW_EMPLOYEE",
        payload:{
            employees: employees,
            employeeId: empId,
            departmentId: deptId
        }
    }
}

export default showEmployee