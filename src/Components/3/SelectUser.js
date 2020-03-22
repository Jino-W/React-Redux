import React from 'react'
import { connect } from 'react-redux'
import {showUser} from '../../action/showUser'
import {startGetTodos} from '../../action/todos'


class SelectUser extends React.Component{
    constructor(){
        super()
        this.state={
            selectedValue:""
        }
    }

    handleChange=(e)=>{
        const id = e.target.value
        if(id !== 'selectUser'){
            this.setState({selectedValue: id});
        }
        this.props.dispatch(showUser(id, this.props.users))
        this.props.dispatch(startGetTodos(id))
    }


    render(){
        return(
            <div>
                <h2>Listing Users - {this.props.users.length}</h2>
                <h4>Select Any User</h4>
                <select value={this.state.selectedValue} onChange={this.handleChange}>
                <option value="selectUser">select user...</option>
                {this.props.users.map(user=>{
                    return <option value={user.id} key={user.id}>{user.name}</option>
                })}
                </select>
                <h4>Selected User</h4>
                {this.props.user && <p>{this.props.user.name} - {this.props.user.email}</p>}
                <h4>Selected User's Todos</h4>
                <ul>{this.props.todos.filter(todo=>todo.userId == this.props.user.id ).map(todo=>{
                return <li key={todo.id}>{todo.title}</li>
                })}</ul> 
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
      users: state.users,
      user: state.showUser,
      todos: state.todos
    }
}
  
  export default connect(mapStateToProps)(SelectUser);