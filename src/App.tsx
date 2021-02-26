import './sass/app.scss';
import './firebase/config';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Routes from './routes/routes';
import TaskProvider from './contexts/TaskContext';
import UserProvider from './contexts/UserContext.js';

function App() {



  return (
    <UserProvider>
      <TaskProvider>
        <Router>
          <Switch>
            {
              Routes.map(Route => Route.toRoute())
            }
          </Switch>
        </Router>
      </TaskProvider>
    </UserProvider>
  )
}

export default App;
