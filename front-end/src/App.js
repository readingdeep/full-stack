import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './Components/HomePage';
import BookPage from './Components/BookPage';
import NavBar from './Components/NavBar';
import Lib2 from './Components/Lib2';
import Lib1 from './Components/Lib1';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <React.Fragment>
          <div className='App'>
            <Route exact path='/'>        
              <HomePage />
            </Route>
            <Route path='/book/:bookId'><BookPage /></Route>
            <Route path='/lib2'><Lib2 /></Route>
            <Route path='/lib1'><Lib1 /></Route>
          </div>
          </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
