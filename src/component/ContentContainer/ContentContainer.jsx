import React from "react";
import styles from '../../Style/project.module.css'
const ContentContainer = (props) => {

    return (<div className={styles.projectContainer}>{props.children}{console.log(props)}</div>)


}
export default ContentContainer;