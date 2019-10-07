import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Home from './components/pages/home'
import Alert from './components/layout/alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/pages/about'
import NotFound from './components/pages/notfound'
import MyUser from './components/user/user';
import GithubState from './Context/github/GithubState';
import AlertState from './Context/alert/AlertState';


const App=()=> {
	
	
		 return (<GithubState>
				 <AlertState>
			 <Router>
    <div className="App">
		  <Navbar title='GitHub Finder'/>
				
				 <div className="container">
					 <Alert/>
					 <Switch>
					 <Route exact path='/' component={Home}/>
						 <Route exact path='/about' component={About}/>
						 <Route exact path='/user/:login' render={props=>(
								 <MyUser {...props}/>
									 )}
								/>
						 <Route component={NotFound}/>
					 </Switch>
					 
				
				 </div>
		
    </div>
				 </Router>
				 </AlertState>
			 </GithubState>
  );
	}


export default App;
