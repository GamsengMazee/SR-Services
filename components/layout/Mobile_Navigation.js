import Link from "next/link";
import classes from "./mobile_nav.module.css";
import { IoIosArrowDown } from "react-icons/io";

function Mobile_Navigation(props) {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a className={classes.navLink} onClick={props.drawerClose}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/booking">
            <a
              className={classes.navLink}
              onClick={props.drawerClose}
            >
              Book Service
            </a>
          </Link>
        </li>
        <li className={classes.dropdown}>
          <a className={classes.navLink}>
            Services <IoIosArrowDown />
          </a>
          <div className={classes.dropdownContainer}>
            <Link href="/Chimney Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>Chimney Service</a>
            </Link>
            <Link href="/Oven Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>Oven Service</a>
            </Link>
            <Link href="/AC Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>AC Service</a>
            </Link>
            <Link href="/HOB Repair and Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>HOB Repair and Service</a>
            </Link>
            <Link href="/Washing Machine Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>Washing Machine Service</a>
            </Link>
            <Link href="/Fridge Repair Service">
              <a className={classes.dropdownItems} onClick={props.drawerClose}>Fridge Repair Service</a>
            </Link>
          </div>
        </li>
        <li><Link href="/about">
        <a
          className={classes.navLink}
          onClick={props.drawerClose}
        >
          About Us
        </a>
      </Link></li>
      </ul>
    </nav>
  );
}

export default Mobile_Navigation;
