import React,{Fragment,useState} from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import User from './components/user/users';
import Search from './components/user/search'; 
import Alert from './components/layout/alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/pages/about'
import MyUser from './components/user/user';


const App=()=> {
	const[users,setUsers]=useState([]);
	const[user,setUser]=useState({});
	const[loading,setLoading]=useState(false);
	const[alert,setAlert]=useState(null);
	const[repos,setRepos]=useState([]);

const searchuser=async(text)=>{
	setLoading(true);
	const res= await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			setUsers(data.items)
		})
	setLoading(false);
}
const clearuser=()=>{
	setUsers([]);
}	
const setalert=(msg,text)=>{
	setAlert({
		msg:msg,
		type:text
	})
	setTimeout(()=>setAlert(null),5000);
}
const getuser=async(username)=>{
	setLoading(true);
	const res= await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			setUser(data)
		})
	setLoading(false);
}
const getuserrepos=async(username)=>{
	setLoading(true);
	const res= await fetch(`https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			setRepos(data)
		})
	setLoading(false);
}

	
		 return (
			 <Router>
    <div className="App">
		  <Navbar title='GitHub Finder'/>
				
				 <div className="container">
					 <Alert alert={alert}/>
					 <Switch>
					 <Route exact path='/' render={props=>(
							 <Fragment>
								<Search searchuser={searchuser} 
					 setalert={setalert} clearUser={clearuser} showclear={users.length>0?true:false}/>
					 <User loading={loading} users={users}/>	 
								 </Fragment>
							 )}/>
						 <Route exact path='/about' component={About}/>
						 <Route exact path='/user/:login' render={props=>(
								 <MyUser {...props} getuser={getuser} user={user}
									 loading={loading}
									 getuserrepos={getuserrepos}
									 repos={repos}/>
									 
								 )}
								/>
					 </Switch>
					 
				
				 </div>
		
    </div>
				 </Router>
  );
	}


export default App;
