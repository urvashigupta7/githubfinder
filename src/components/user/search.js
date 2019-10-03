import React,{useState} from 'react';
import PropTypes from 'prop-types'
const Search=(props)=>{
	const [text,setText]=useState('');
		const onChange=(e)=>
		{setText(e.target.value)
		}
		const onSubmit=(e)=>{
			e.preventDefault();
			if(text===''){
				props.setalert('Please enter something','light');
			}
			else{
				props.searchuser(text);
			setText('');
			}
			
		}
	
		return( 
		<div>
				<form onSubmit={onSubmit} className='form'>
					<input type='text' name='text' placeholder='Search Users...' value={text}
						onChange={onChange}/>
					<input
						type='submit'
						value='search'
						className='btn btn-dark btn-block' /> 
				</form>
				{props.showclear&&(
				<button className='btn btn-light btn-block' onClick={props.clearUser}>Clear</button>
					)}
				
			</div>
		)
	
}
Search.propTypes={
			searchuser:PropTypes.func.isRequired,
			clearUser:PropTypes.func.isRequired,
			showclear:PropTypes.bool.isRequired,
			setalert:PropTypes.func.isRequired
		}
export default Search;