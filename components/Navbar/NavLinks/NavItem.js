import React from 'react';
import Link from 'next/link';

const NavItem = (props) => {
  return (
    <li className='NavItem'>
      <Link href={props.link} exact={props.exact}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
