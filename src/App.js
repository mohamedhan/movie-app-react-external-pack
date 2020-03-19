import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import  {Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Description from './components/Description'
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter > */}
      <Router>
      <Route exact path='/' component={Main} />
      <Route path='/:movie_id' component={Description}  />
      {/* // <Main /> */}
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
