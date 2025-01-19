import React, { useState, useEffect } from "react";
import styles from "./styles/navbar.module.css";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.main} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <h2>Harsh Wagh / Bynry</h2>
        <div className={styles.navContainer}>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
