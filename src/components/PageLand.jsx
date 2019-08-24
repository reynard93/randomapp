import React from "react";
import {NavLink} from 'react-router-dom';
import land from '../land.png'

const PageLand = () => {
  var divStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${land})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
      <div style={divStyle}>
        <NavLink to="/one" style={{width:"20%" ,height:"40px", textDecoration:"none", fontSize: "2rem"}}> Enter </NavLink>
      </div>
  );
};

export default PageLand;
