import React from "react";
import {Link } from 'react-router-dom'

const UserItem = (props) => {
    
    //its receiving props from user comp so this.props.user
    const { login, avatar_url } = props.user; 

    return (
      <div className="card text-center" style={{ border:'3px solid red' }}>
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    );

}

export default UserItem;
