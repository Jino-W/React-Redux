import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/users'
import postsReducer from '../reducers/posts'
import todosReducer from '../reducers/todos'
import showUserReducer from '../reducers/showUser'
import filterTodosReducer from '../reducers/filterTodos'
import networksReducer from '../reducers/networks'
import departmentsReducer from '../reducers/departments'
import employeesReducer from '../reducers/employees'
import showEmployeeReducer from '../reducers/showEmployee'
import tasksReducer from '../reducers/tasks'





const configureStore1 = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        posts: postsReducer,
        todos: todosReducer,
        showUser: showUserReducer, //3
        filterTodos: filterTodosReducer, //1
        networks: networksReducer, //4
        departments: departmentsReducer, //5
        employees: employeesReducer,
        showEmployee: showEmployeeReducer,
        tasks: tasksReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore1