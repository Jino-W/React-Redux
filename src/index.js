import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux'

//1
import App1 from './App1';

import configureStore1 from './store/configureStore1'
import { startSetUsers } from './action/users'
import { startGetPosts } from './action/posts';
import { startGetTodos } from './action/todos';
import getNetworks from './action/networks';  
import getDepartments from './action/departments'; 
import getEmployees from './action/employees'; 
import {getTasks} from './action/tasks'; 


import App2 from './App2';  //2
import App3 from './App3';  //3
import App4 from './App4';  //4
import App5 from './App5';  //5
import App6 from './App6';  //6



//1)project-1
const store = configureStore1()
console.log(store.getState()) 

store.subscribe(() => {
    console.log(store.getState())
})


//1
store.dispatch(startSetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetTodos())

//4
store.dispatch(getNetworks())

//5
store.dispatch(getEmployees())
store.dispatch(getDepartments())

//6
store.dispatch(getTasks())

store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(startSetUsers())


function AllAssignments() {
    return (
      <BrowserRouter>
        <div>

        <Link to="/app/1">1) Post-filterTodo</Link> | 
        <Link to="/app/2">2) Asc-Desc</Link> | 
        <Link to="/app/3">3) Users-dropdown</Link> | 
        <Link to="/app/4">4) Networks</Link> |
        <Link to="/app/5">5) departments- employees</Link> |
        <Link to="/app/6">6) Tasks-checkBox</Link> |


        <Route exact path="/app/1" component={App1} />
        <Route exact path="/app/2" component={App2} />
        <Route exact path="/app/3" component={App3} />
        <Route exact path="/app/4" component={App4} />
        <Route exact path="/app/5" component={App5} />
        <Route exact path="/app/6" component={App6} />


        </div>
      </BrowserRouter>
    );
  }

const ele = (
    <Provider store={store}>
        <AllAssignments />
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

