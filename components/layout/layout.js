import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";
import Backdrop from "./Backdrop";
import classes from "./layout.module.css";

const Layout = (props) => {
  const [isActive, setIsActive] = useState({
    home: "#fff",
    booking: "#fff",
    services: "#fff",
    about: "#fff",
  });
  const [drawerOn, setDrawerOn] = useState(false);  //state for drawer
  const [navBackground, setNavBackground] = useState()  //state for navbar background on scrolling

  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (router.isReady) {
      if (path == "/") {
        setIsActive({
          home: "",
          booking: "",
          services: "",
          about: "",
        });
      }
      if (path == "/booking") {
        setIsActive({
          home: "",
          booking: "#117e1e",
          services: "",
          about: "",
        });
      }
      if (path == "/[services]") {
        setIsActive({
          home: "",
          booking: "",
          services: "#117e1e",
          about: "",
        });
      }
      if (path == "/about") {
        setIsActive({
          home: "",
          booking: "",
          services: "",
          about: "#117e1e",
        });
      }
    }
  }, [path, router.isReady]);

  //toggle drawer function
  const toggleDrawer = () => {
    setDrawerOn(!drawerOn);
  };
  // closeDrawer function
  const drawerClose = () => {
    setDrawerOn(false);
  };

  //toggle navbar background color
  useEffect(() => {
    function checkScroll() {
      if (window.scrollY <= 768) {
        setNavBackground(classes.lightNav)
      }
      if (window.scrollY === 0) {
        setNavBackground(classes.darkNav)
      }
    }
    window.addEventListener("scroll", checkScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScroll);
  }, []); // Empty array ensures that effect is only run on mount

  //JSX below
  return (
    <>
      <Drawer sideDrawer={drawerOn} drawerClose={drawerClose} />
      {drawerOn && <Backdrop drawerClose={drawerClose} />}
      <nav className={`${classes.navbar} ${navBackground}`}>
        <div className={classes.container}>
          <Link href="/">
            <a className={classes.brandName}>SR Service</a>
          </Link>

          <button
            type="button"
            className={classes.menuButton}
            style={{ zIndex: 100 }}
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className={classes.menuIcon} size={24} color="#fff"/>
          </button>

          <div className={classes.spacer}></div>

          {/*desk_nav --> class for desktop navbar*/}
          <div id={classes.mainNav} className={classes.navbarContainer}>
            <ul className={classes.nav_ul}>
              <li>
                <Link href="/">
                  <a
                    style={{ color: isActive.home }}
                    className={classes.navItem}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a
                    style={{ color: isActive.booking }}
                    className={classes.navItem}
                  >
                    Book Service
                  </a>
                </Link>
              </li>
              <li className={classes.dropdown}>
                <a
                  style={{ color: isActive.services }}
                  className={classes.navItem}
                >
                  Services <IoIosArrowDown />
                </a>
                <div className={classes.dropdownMenu}>
                  <Link href="/Chimney Service">
                    <a className={classes.dropdownItem}>Chimney Service</a>
                  </Link>
                  <Link href="/Oven Service">
                    <a className={classes.dropdownItem}>Oven Service</a>
                  </Link>
                  <Link href="/AC Service">
                    <a className={classes.dropdownItem}>AC Service</a>
                  </Link>
                  <Link href="/HOB Repair and Service">
                    <a className={classes.dropdownItem}>HOB Repair and Service</a>
                  </Link>
                  <Link href="/Washing Machine Service">
                    <a className={classes.dropdownItem}>Washing Machine Service</a>
                  </Link>
                  <Link href="/Fridge Repair Service">
                    <a className={classes.dropdownItem}>Fridge Repair Service</a>
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/about">
                  <a
                    style={{ color: isActive.about }}
                    className={classes.navItem}
                  >
                    About Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
