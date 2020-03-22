import React from 'react'
import { connect } from 'react-redux'
import showEmployee from '../action/showEmployee'


class Employees extends React.Component{
    constructor(){
        super()
        this.state={
            selectedDept:"",
            selectedEmp:"",
            isDisabled: true
        }
    }

    DeptHandle=(e)=>{
        const id = e.target.value
        if(id !== 'selectDept' ){
            this.setState({selectedDept: id, isDisabled: false});
        }
    }
    employeeHandle=(e)=>{
        const id = e.target.value
        if(id !== 'selectEmp'){
            this.setState({selectedEmp: id, isDisabled: false});
        }
    }

    handleClick=()=>{
        if(this.state.selectedEmp !== 'selectEmp' && this.state.selectedDept !== "selectDept"){
            this.setState({isDisabled: false})
            this.props.dispatch(showEmployee(this.state.selectedEmp, this.state.selectedDept, this.props.employees))
        }
    }

    render(){
        return(
            <div>
                <h4>Departments</h4>
                <select value={this.state.selectedDept} onChange={this.DeptHandle}>
                    <option value="selectDept">select department...</option>
                    {this.props.departments.map(department=>{
                        return <option value={department.id} key={department.id}>{department.name}</option>
                    })}
                </select>

                <h4>Employees</h4>
                <select value={this.state.selectedEmp} placeholder="selectEmp" onChange={this.employeeHandle}>
                    <option value="selectEmp">select employee...</option>
                    {this.props.employees.map((employee, index)=>{
                        return <option value={employee.id} key={employee.id}>{employee.id}</option>
                    })}
                </select>

                <button onClick={this.handleClick} disabled={this.state.isDisabled && this.state.selectedEmp !== 'selectEmp' && this.state.selectedDept !== "selectDept"}>Get Details</button>

                <h2>Show Employee Details</h2>
                {this.props.showEmployee ? 
                    <p>{this.props.showEmployee.id} - {this.props.showEmployee.name}</p> : <p>-- No employees found --</p>}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      departments: state.departments,
      employees: state.employees,
      showEmployee: state.showEmployee
    }
}
  
  export default connect(mapStateToProps)(Employees);