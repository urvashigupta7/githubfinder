import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import User from './components/user/users';
import Search from './components/user/search'; 


class App extends React.Component {
	state={
		users:[],
		loading:false
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
	render(){
	
		 return (
    <div className="App">
		  <Navbar title='GitHub Finder'/>
				
				 <div className="container">
				<Search searchuser={this.searchuser}  clearUser={this.clearuser} showclear={this.state.users.length>0?true:false}/>
					 <User loading={this.state.loading} users={this.state.users}/>
				 </div>
		
    </div>
  );
	}
}

export default App;
