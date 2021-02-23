import React from 'react';
import styles from '../../Style/project.module.css';

const Header = (props) => {
    return (
        <div className={styles.projectTitle}>{props.children}</div>
    )
}
export default Header;