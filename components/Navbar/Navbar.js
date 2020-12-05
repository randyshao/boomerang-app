import Link from 'next/link';
// import Logo from '../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';
import DrawerToggle from './SideDrawer/DrawerToggle';
import styles from '../../styles/Home.module.scss';

const Navbar = (props) => {
  return (
    <header style={{ backgroundColor: '#00497d' }}>
      <div className={styles.container}>
        <header className={styles.Navbar}>
          <ul className={styles.NavLinks}>
            <li>
              <Link href='/dashboard'>Sign up</Link>
            </li>
          </ul>
          {/* <div className='LogoContainer'>
        <a href='/'>LOGO</a>
      </div>
      <nav className='DesktopOnly'>
        <NavLinks />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} /> */}
        </header>
      </div>
    </header>
  );
};

export default Navbar;
