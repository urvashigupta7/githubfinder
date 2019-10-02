import React from 'react';

const myalert=({alert})=>{

		return(
			alert!==null&&(<div className={`alert ${alert.type}`}>
					<i className='fas fa-info-circle'/> {alert.msg}
				</div>
					)
		);
}
export default myalert;