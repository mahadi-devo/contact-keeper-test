import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/layouts/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

import Contactstate from './Context/Contact/ContactState';
import './App.css';

const App = () => {
  return (
    <Contactstate>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Contactstate>
  );
};

export default App;
