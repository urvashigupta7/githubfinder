import React from 'react';
import RepoItem from './repoitem';
const Repos=(props)=>{
	return props.repos.map(repo=> (<RepoItem repo={repo} key={props.repos.id}/>)
								)
}
export default Repos;