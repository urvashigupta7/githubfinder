import React,{useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS,
	   SET_LOADING,
		CLEAR_USERS,
		GET_USER,
		GET_REPOS
	   } from '../types';
let githubClientId;
let githubClientSecret;
if(process.env.NODE_ENV!=='production'){
	githubClientId=process.env.REACT_APP_CLIENT_ID;
	githubClientSecret=process.env.REACT_APP_CLIENT_SECRET;
}
else{
	githubClientId=process.env.CLIENT_ID;
	githubClientSecret=process.env.CLIENT_SECRET;
}

const GithubState=(props)=>{
	const initialState={
		users:[],
		user:{},
		repos:[],
		loading:false,
	}
	const [state,dispatch]=useReducer(GithubReducer,initialState)
	//SEARCH_USER
	const searchuser=async(text)=>{
	setLoading();
	const res= await fetch(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
&client_secret=${githubClientSecret}`);
		res.json().then((data)=>{  
			dispatch({type: SEARCH_USERS,payload:data.items})
		})
	
}
	
	//GET_USER
	const getuser=async(username)=>{
	setLoading();
	const res= await fetch(`https://api.github.com/users/${username}?client_id=${githubClientId}
&client_secret=${ githubClientSecret}`);
		res.json().then((data)=>{
			dispatch({type:GET_USER,payload:data});
		})
	
}
	
	//GET_REPOS
	const getuserrepos=async(username)=>{
	setLoading();
	const res= await fetch(`https://api.github.com/users/${username}/repos?client_id=${githubClientId}
&client_secret=${githubClientSecret}`);
		res.json().then((data)=>{
			// setRepos(data)
			dispatch({type:GET_REPOS,payload:data});
		})
	
}

	
	
	//SET_LOADING
	const setLoading=()=>{
		dispatch({type:SET_LOADING});
	}
	
	
	//CLEAR_USERS
	const clearuser=()=>{
		dispatch({type:CLEAR_USERS});
}	
	
	return (<GithubContext.Provider value={{
		users:state.users,
		user:state.user,
		repos:state.repos,
		loading:state.loading,
		searchuser,
		clearuser,
		getuser,
		getuserrepos
			}}
	>{props.children}
	</GithubContext.Provider>)
}
export default GithubState;