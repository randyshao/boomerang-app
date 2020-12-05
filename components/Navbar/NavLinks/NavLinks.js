import React from 'react';
import NavItem from './NavItem';
import ButtonBlock from '../../util/ButtonBlock';

const NavLinks = () => {
  return (
    <ul className='NavLinks'>
      <NavItem link='/about'>About</NavItem>
      <NavItem link='/initiatives'>Initiatives</NavItem>
      <NavItem link='/projectjam'>Project Jam</NavItem>
      <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <ButtonBlock link='https://tinyurl.com/joinproductbuds' target='_blank'>
          Join Our Community
        </ButtonBlock>
      </div>
    </ul>
  );
};

export default NavLinks;
