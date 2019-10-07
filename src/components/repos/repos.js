import React,{useContext} from 'react';
import RepoItem from './repoitem';
import GithubContext from '../../Context/github/githubContext';
const Repos=()=>{
	const githubContext=useContext(GithubContext);
	return githubContext.repos.map(repo=> (<RepoItem repo={repo} key={repo.id}/>)
								)
}
export default Repos;