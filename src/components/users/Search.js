import React, { useState } from "react";

const  Search=({searchUsers,clearUsers,setAlert} )=> {

  const [text, setText] = useState('');

   const onSubmit = (e)=>{
        e.preventDefault();
        if (text === '') {
            setAlert( 'Please Enter Username!!!' ,'danger' )
        } else {
            searchUsers(text) //this searchUser is coming from App comp using btm to up   
            setText('');          
        }
    }

  const  onChange=(e)=> {
    setText(e.target.value);
    }

    return (
      <div>
        <form className="form" onSubmit={ onSubmit }>
          <input
            type="text"
            name="text"
            placeholder="Search Github Users..."
                    value={text}
            onChange={onChange }
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
            <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
      </div>
    );
}

export default Search;
