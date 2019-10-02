import React,{Component} from 'react';
import PropTypes from 'prop-types'
class Search extends Component{
	state={
			text:''
		}
		onChange=(e)=>
		{this.setState({[e.target.name]:e.target.value})
		}
		onSubmit=(e)=>{
			e.preventDefault();
			if(this.state.text===''){
				this.props.setalert('Please enter something','light');
			}
			else{
				this.props.searchuser(this.state.text);
			this.setState({text:''});
			}
			
		}
		static propTypes={
			searchuser:PropTypes.func.isRequired,
			clearUser:PropTypes.func.isRequired,
			showclear:PropTypes.bool.isRequired,
			setalert:PropTypes.func.isRequired
		}
	render(){
		return( 
		<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input type='text' name='text' placeholder='Search Users...' value={this.state.text}
						onChange={this.onChange}/>
					<input
						type='submit'
						value='search'
						className='btn btn-dark btn-block' /> 
				</form>
				{this.props.showclear&&(
				<button className='btn btn-light btn-block' onClick={this.props.clearUser}>Clear</button>
					)}
				
			</div>
		)
	}
}
export default Search;