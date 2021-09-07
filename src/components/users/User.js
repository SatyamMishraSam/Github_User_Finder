import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from '../repos/Repos'

const User =({ user,getUser,getUserRepos,loading,repos,match })=> {

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
  } = user;
  
    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link
          to="/"
          className=" btn btn-dark "
          style={{ borderRadius: "5px " }}
        >
          Back to Search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times-circle"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: { location }</p>
          </div>

          <div>
            {bio && (
              <Fragment>
                <h2>About {name}</h2>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1" >Visit Github Profile</a>
           
            <h4> Username: {login}</h4>
            <h4>Company: {company} </h4>
            <h4>Website: {blog} </h4>
            
          </div>

        </div>

        <div className="card text-center">
          <div className="badge badge-danger"  >Followers: { followers}</div>
          <div className="badge badge-success"  >Following: { following}</div>
          <div className="badge badge-light"  >Public Repos: { public_repos }</div>
          <div className="badge badge-dark"  >Public Gists: { public_gists}</div>
          </div>

        <Repos repos={repos}/>
      </Fragment>
    );

}

export default User;
