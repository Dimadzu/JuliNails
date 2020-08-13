import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import InboxPage from './pages/InboxPage';
import MenuSite from './menu/MenuSite';


const history = createBrowserHistory();


function App() {

  return (
    <div className="conteiner">
      <Router history={createBrowserHistory}>
      <div className="conteiner_content">
        <MenuSite />
      </div>  
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/service' component={InboxPage} />
      </Router>

    </div>
  );
}

export default App;
