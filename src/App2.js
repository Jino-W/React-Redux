import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import ListingUser from './Components/2/ListingUser'


function App2() {
  return (
    <BrowserRouter>
    
      <div>
          
      <h2>Asc-Desc</h2>

      <Link to="/users_sort">Users</Link>

      <Route exact path="/users_sort" component={ListingUser} />
        
      </div>
    </BrowserRouter>
  );
}

export default App2
