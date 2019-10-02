import React,{Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import User from './components/user/users';
import Search from './components/user/search'; 
import Alert from './components/layout/alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/pages/about'
import MyUser from './components/user/user';


class App extends React.Component {
	state={
		users:[],
		user:{},
		loading:false,
		alert:null,
		repos:[]
	}

searchuser=async(text)=>{
	this.setState({loading:true});
	const res= await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			this.setState({users:data.items})
		})
	this.setState({loading:false});
}
clearuser=()=>{
	this.setState({
	    users:[]})
}	
setalert=(msg,text)=>{
	this.setState({alert:{
		msg:msg,
		type:text
	}})
	setTimeout(()=>this.setState({alert:null}),5000);
}
getuser=async(username)=>{
	this.setState({loading:true});
	const res= await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			this.setState({user:data})
		})
	this.setState({loading:false});
}
getuserrepos=async(username)=>{
	this.setState({loading:true});
	const res= await fetch(`https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}
&client_secret=${ process.env.REACT_APP_CLIENT_SECRET}`);
		res.json().then((data)=>{
			this.setState({repos:data})
		})
	this.setState({loading:false});
}
	render(){
	
		 return (
			 <Router>
    <div className="App">
		  <Navbar title='GitHub Finder'/>
				
				 <div className="container">
					 <Alert alert={this.state.alert}/>
					 <Switch>
					 <Route exact path='/' render={props=>(
							 <Fragment>
								<Search searchuser={this.searchuser} 
					 setalert={this.setalert} clearUser={this.clearuser} showclear={this.state.users.length>0?true:false}/>
					 <User loading={this.state.loading} users={this.state.users}/>	 
								 </Fragment>
							 )}/>
						 <Route exact path='/about' component={About}/>
						 <Route exact path='/user/:login' render={props=>(
								 <MyUser {...props} getuser={this.getuser} user={this.state.user}
									 loading={this.state.loading}
									 getuserrepos={this.getuserrepos}
									 repos={this.state.repos}/>
									 
								 )}
								/>
					 </Switch>
					 
				
				 </div>
		
    </div>
				 </Router>
  );
	}
}

export default App;
