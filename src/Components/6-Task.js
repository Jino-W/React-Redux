import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {addTask, removeTask, editTask} from '../action/tasks'


class Tasks extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            body:"",
            completed: false
        }
    }

    handleCheckbox=(e)=>{
        this.setState({completed: e.target.checked})
    }


    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleStatus=(e)=>{
        this.props.dispatch(editTask(this.props.tasks, e.target.checked))
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.dispatch(addTask(this.props.tasks, {title:this.state.title, body:this.state.body, completed: this.state.completed}))
        this.setState({
            title:"",
            body:"",
            completed: false
        })
    }

    handleDelete=(index)=>{
        this.props.dispatch(removeTask(this.props.tasks, index))
    }

    render(){
        console.log(this.state.title,this.state.body,this.state.completed)
        return(
            <div>
                <table border="2px" cellpadding="12px" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th><label htmlFor="status">Status </label> <input id="status" type="checkbox" value={this.state.status} name="status" onChange={this.handleStatus} /></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.body}</td>
                                    <td>
                                        <label>{task.status}</label>
                                        <input type="checkbox" name="status" checked={task.completed} onChange={this.handleChange} />
                                    </td>
                                    <td><Link to="#" onClick={()=>{
                                        this.handleDelete(index)
                                    }}>remove</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input id="title" type="text" value={this.state.title} name="title" onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="body">Body: </label>
                        <input id="body" type="textarea" value={this.state.body} name="body" onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="completed"></label>
                        <input id="completed" type="checkbox" value={this.state.completed} checked={this.state.completed} name="completed" onChange={this.handleCheckbox} /> completed
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.tasks)
    return {
      tasks: state.tasks
    }
}
  
  export default connect(mapStateToProps)(Tasks);