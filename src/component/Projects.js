import React, { Component } from 'react'
import Images from './Images'
import styles from '../Style/project.module.css'

class Projects extends Component {
    
    render() {
        return (
            <div className={styles.projectContainer} >
                <span className={styles.projectTitle}><i id={styles.icon} className="fa fa-angle-double-right"></i>Scroll Down For Projects</span>
                <Images />
            </div>
        )
    }
}

export default Projects
