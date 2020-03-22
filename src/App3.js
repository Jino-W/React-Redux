import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import SelectUser from './Components/3/SelectUser'


function App3() {
  return (
    <BrowserRouter>
    
      <div>
          
      <h2>Asc-Desc</h2>

      <Link to="/users_select">Users</Link>

      <Route exact path="/users_select" component={SelectUser} />
        
      </div>
    </BrowserRouter>
  );
}

export default App3
