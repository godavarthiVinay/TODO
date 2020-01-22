import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Switch,Route,Link,NavLink,Prompt,Redirect,withRouter} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';
import logo from './logo.svg';
import './App.css';

function App({loginStatus}) {
  return (
    <div className="App">
        <BrowserRouter >
          <Switch>
            <Route exact strict path='/' component={Login}/>
            {/**/}<Route exact strict path='/home' render={(props)=>(loginStatus ?(<Home {...props}/>):(<Redirect to={"/"}/>))}/>
            <Route exact strict path='/home' component={Home}/>
            <Route exact strict component={Error}/>
          </Switch>
        </BrowserRouter>

    </div>
  );
}

const mapPropsToState =(state,ownprops)=>({
    loginStatus:state.login.loginStatus
});

export default connect(mapPropsToState)(App);


/*
* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/