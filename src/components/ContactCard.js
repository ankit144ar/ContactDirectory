import React from 'react';
import "./"
import profile from '../images/profile.jpg';

export default  function ContactCard(props) {
  return(
    <div className="item" style={{display: "flex", alignItems: "center",padding: "20px 25px",justifyContent: "space-between"}}>
      <div className="content" style={{width: "calc(100% - 20px)"}}>
        <div>
          <img src={profile} alt='Profile'  />
        </div>
        <div>
          <div className="header">{props.contact.name}</div>
          <div className="">{props.contact.email}</div>
        </div>
      </div>
      <i className="trash outline icon alternate" style={{color: "red", display: "block", width: "20px", cursor: "pointer"}} 
       onClick={()=> (
        props.clickHandler(props.contact.id)
       )}
     ></i>
    </div>
  )
}

