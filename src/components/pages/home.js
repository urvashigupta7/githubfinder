import React,{Fragment} from 'react';
import User from '../user/users';
import Search from '../user/search'; 
const Home=()=>{
	return(
		<Fragment>
			<Search/>
			<User/>
			</Fragment>
	)
	
}
export default Home;