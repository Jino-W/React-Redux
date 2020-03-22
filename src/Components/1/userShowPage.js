import React from 'react'
import { connect } from 'react-redux'
import {startGetTodos, resetTodos} from '../../action/todos'
import filterTodos from '../../action/filterTodos'

class usersShow extends React.Component{

    componentDidMount(){
        this.props.dispatch(startGetTodos(this.props.user.id))
    }

    componentWillUnmount(){
        this.props.dispatch(resetTodos(this.props.user.id))
    }

    handleChange=(e)=>{
        const filterAction = e.target.value
        this.props.dispatch(filterTodos(filterAction, this.props.todos))
    }

    render(){
        return (
            <div>
                
                <h2>User Show</h2>
                {this.props.user && <p>{this.props.user.name}-{this.props.posts.length}</p>}

                <h2>Posts written by user - {this.props.posts.length}</h2>
                <ul>{this.props.posts.map(post=>{
                    return <li key={post.id}>{post.title}</li>
                })}</ul>

                <h2>Todos Lists - { this.props.filterTodos.length }</h2>

                <input type="radio" checked={this.props.filterTodos.length == this.props.todos.length } name="sort" value="All" onChange={this.handleChange} /><label>All</label>
                <input type="radio" name="sort" value="Completed" onChange={this.handleChange} /><label>Completed</label>
                <input type="radio" name="sort" value="Incomplete" onChange={this.handleChange} /><label>Incomplete</label>

                <ul>{this.props.filterTodos.map(todo=>{
                return <li key={todo.id}>{todo.title}</li>
                })}</ul>
                
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
      user: state.users.find(user=> user.id == props.match.params.id),
      posts: state.posts.filter(post=> post.userId == props.match.params.id),
      todos: state.todos,        //.filter(todo=> todo.userId == props.match.params.id),
      filterTodos: state.filterTodos.length > 0 ? state.filterTodos : state.todos
    }
  }
  
  export default connect(mapStateToProps)(usersShow);