import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import User from './components/user/users';


class App extends React.Component {
	state={
		users:[],
		loading:false
	}
	async componentDidMount(){
		this.setState({loading:true});
		const res= await fetch('https://api.github.com/users');
		res.json().then((data)=>{
			this.setState({users:data});
		})
		this.setState({loading:false});
	
	}
	render(){
		 return (
    <div className="App">
		  <Navbar title='GitHub Finder'/>
				 <div className="container">
					 <User loading={this.state.loading} users={this.state.users}/>
				 </div>
		
    </div>
  );
	}
}

export default App;
