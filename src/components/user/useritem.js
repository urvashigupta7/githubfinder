import React from 'react';
import {Link} from 'react-router-dom';

const userItem=(props)=>{

		return(
			<div className='carduser text-center' style={{width:'100%'}}>
				<img src={props.user.avatar_url} className='round-img' alt='' style={{width:'60px'}}/>
				<h3>{props.user.login}</h3>
				<div>
					<Link to={`/user/${props.user.login}`}className='btn btn-dark btn-sm my-1'>More
					</Link>
				</div>
			</div>
		);
}
export default userItem;