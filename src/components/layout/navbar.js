import React from 'react';
const Navbar=(props)=>{
		return(
			<nav className='navbar bg-primary'>
				<h1>
					<i className={props.icon} /> {props.title}
				</h1>
			</nav>
		);
	
}
Navbar.defaultProps={
		icon:'fab fa-github'
	};
export default Navbar;