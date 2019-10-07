import React,{useContext} from 'react';
 import AlertContext from '../../Context/alert/alertContext';

const Alert=()=>{
	const alertContext=useContext(AlertContext);

		return(
			alertContext.alert!==null&&(<div className={`alert ${alertContext.alert.type}`}>
					<i className='fas fa-info-circle'/> {alertContext.alert.msg}
				</div>
					)
		)
}
export default Alert;