import React from 'react';


const RepoListing = (props) => (
  <div>
    <h4> {props.repo.name} </h4>
    <div> Owner: {props.repo.owner.login} </div>
    <div> Description: {props.repo.description} </div>
    <div> Number of Forks: {props.repo.forks} </div>
    <div> URL: {props.repo.url} </div>
  </div>
)

export default RepoListing;