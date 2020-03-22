import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import SelectUser from './Components/4-network'
import Network from './Components/4-network';


function App4() {
  return (
    <BrowserRouter>
    
      <div>
          
      <h2>Asc-Desc</h2>

      <Link to="/network">Network</Link>

      <Route exact path="/network" component={Network} />
        
      </div>
    </BrowserRouter>
  );
}

export default App4
