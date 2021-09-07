import React from 'react';
import ReposItem from './ReposItem';

 const Repos = ({ repos })   => {
    return repos.map( repo=> <ReposItem key={repo.id} repo={repo} /> )
}

export default Repos;
