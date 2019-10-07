import React,{useContext} from 'react';
import Useritem from './useritem';
import Spinner from '../layout/spinner';
import GithubContext from '../../Context/github/githubContext'
const Users=(props)=>{
	const githubContext=useContext(GithubContext);
			if(githubContext.loading){
			return (<Spinner/>);
		}
	else{
		return (
		
				<div style={userStyle}>
				{
				       githubContext.users.map(user=>(
					<Useritem key={user.id} user={user} />
					))
				}
					</div>					

			
		);
}
}
const userStyle={
	display:'grid',
	gridTemplateColumns:'repeat(3,1fr)',
	gridGap:'1rem'
}
export default Users;