import React from 'react';
const Repo=({repo})=>{
	return(
	<div class='card'>
			<h3>
				<a href={repo.html_url}>{repo.name}</a>
			</h3>
		</div>
	)
	
}
export default Repo;