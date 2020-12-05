import React from 'react';
// import Toggle from "../../../images/drawertoggle.svg"

const DrawerToggle = (props) => {
  return (
    <div className='DrawerToggle' onClick={props.clicked}>
      Toggle{/* <img style={{ marginBottom: "10px" }} src={Toggle} /> */}
    </div>
  );
};

export default DrawerToggle;
