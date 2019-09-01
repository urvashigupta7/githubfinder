import React from 'react';

const userItem=(props)=>{

		return(
			<div className='card text-center'>

				<img src={props.user.avatar_url} className='round-img' alt='' style={{width:'60px'}}/>
				<h3>{props.user.login}</h3>
				<div>
					<a href={props.user.html_url} className='btn btn-dark btn-sm my-1'>More</a>
				</div>
			</div>
		);
}
export default userItem;