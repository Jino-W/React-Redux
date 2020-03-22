import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Tasks from './Components/6-Task'


function App6() {
  return (
    <BrowserRouter>
    
      <div>
          
      <h2>Task-checkbox</h2>

      <Link to="/Tasks">Tasks</Link>

      <Route exact path="/Tasks" component={Tasks} />
        
      </div>
    </BrowserRouter>
  );
}

export default App6
