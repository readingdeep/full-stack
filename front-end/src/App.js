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
            <Route path='/book/:bookId'>
              <BookPage />
            </Route>
          </div>
          </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
