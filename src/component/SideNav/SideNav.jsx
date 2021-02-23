import React from "react";
import styles from '../../Style/nav-bar.module.css';
import { Link } from "react-router-dom";
const SideNav = (props) => {
    return (
        <div className={styles.sideContainer}>
            <div className={styles.nameContainer}>
                <span className={styles.name}><i id={styles.icon} className="fa fa-angle-double-right"></i>ALSHARIF EID NAHAS</span>
            </div>
            <div className={styles.navLinks}>
                <div><i id={styles.icon} className="fa fa-angle-double-right"></i><Link to="/About">About</Link></div>
                <div><i id={styles.icon} className="fa fa-angle-double-right"></i><Link to="/">Projects</Link></div>


            </div>
        </div>
    )
}

export default SideNav;
