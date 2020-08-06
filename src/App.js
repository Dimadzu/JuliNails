import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Routelink from './components/Routelink';
import AboutPage from './components/AboutPage';
import InboxPage from './components/InboxPage';

const history = createBrowserHistory();


function App() {
  
  return (
<div className="conteiner">
<Router history={createBrowserHistory}>
        <Route path='/' component={Routelink} >
            <Route path='/' component={Routelink} /> 
            <Route path='/about' component={AboutPage} />
            <Route path='/inbox' component={InboxPage}/>
        </Route>    
        
    </Router>    

</div>   
  );
}

export default App;
