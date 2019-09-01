import React from 'react';
import Useritem from './useritem';
import Spinner from '../layout/spinner';
const Users=(props)=>{
			if(props.loading){
			return (<Spinner/>);
		}
	else{
		return (
		<div>
				<div style={userStyle}>
				{
				       props.users.map(user=>(
					<Useritem key={user.id} user={user} />
					))
				}
					</div>					

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