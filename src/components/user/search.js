import React,{useState,useContext} from 'react';
import GithubContext from '../../Context/github/githubContext';
import AlertContext from '../../Context/alert/alertContext';
const Search=(props)=>{
	const githubContext=useContext(GithubContext);
	const alertContext=useContext(AlertContext);
	const [text,setText]=useState('');
		const onChange=(e)=> 
		{setText(e.target.value)
		}
		const onSubmit=(e)=>{
			e.preventDefault();
			if(text===''){
				alertContext.setalert('Please enter something','light');
			}
			else{
				githubContext.searchuser(text);
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
				{githubContext.users.length>0&&(
				<button className='btn btn-light btn-block' onClick={githubContext.clearuser}>Clear</button>
					)}
				
			</div>
		)
	
}

export default Search;