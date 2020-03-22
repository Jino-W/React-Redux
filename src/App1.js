import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import usersList from './Components/1/usersList'
import usersShow from './Components/1/userShowPage'


function App1() {
  return (
    <BrowserRouter>
    
      <div>
      <h2>jsonplaceholder-user-todo-post</h2>

      <Link to="/users">Users</Link>

      <Route exact path="/users" component={usersList} />
      <Route path="/users/:id" component={usersShow} />

        
      </div>
    </BrowserRouter>
  );
}

export default App1
