import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import UserItem from './components/user/useritem';

class App extends React.Component {
	render(){
		 return (
    <div className="App">
		  <Navbar title='GitHub Finder'/>
		<UserItem />
    </div>
  );
	}
}

export default App;
