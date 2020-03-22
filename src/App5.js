import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Employees from './Components/5-dept-emp'


function App5() {
  return (
    <BrowserRouter>
    
      <div>
          
      <h2>Asc-Desc</h2>

      <Link to="/employees">Users</Link>

      <Route exact path="/employees" component={Employees} />
        
      </div>
    </BrowserRouter>
  );
}

export default App5
