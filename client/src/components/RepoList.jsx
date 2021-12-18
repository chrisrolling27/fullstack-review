import React from 'react';
import RepoListing from './RepoListing.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos!

    <div> {props.repos.map((repo, i) => <RepoListing repo={repo} key={i}/>  )} </div>

  </div>
)

export default RepoList;