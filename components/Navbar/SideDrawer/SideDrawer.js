import React from 'react';
// import Logo from "../../Logo/Logo"
import NavLinks from '../NavLinks/NavLinks';
// import Backdrop from "../../UI/Backdrop"
// import Auxiliary from "../../../hoc/Auxiliary"

const SideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Closed'];

  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }

  return (
    <>
      {/* <Backdrop show={props.open} clicked={props.closed} /> */}
      <div className={attachedClasses.join(' ')}>
        {/* <Logo show={props.open} clicked={props.closed} /> */}
        <nav>
          <NavLinks />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
