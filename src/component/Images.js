import React, { Component } from 'react'
import {
    hospitalProject, radwaProject, recipeProject, eplProject,
    hospitalHT, eplHT, radwaHT, recipeHT
} from '../Images/index';
import styles from '../Style/project.module.css'
export class Images extends Component {

    render() {


        const projects = [
            {
                projectImage: recipeProject,
                projectHtImage: recipeHT,
                projectName: 'Recipe Web Application',
                projectLink: "https://y92ml.csb.app/",
                projectGit: "https://github.com/alsharifnahas/recipesapp"
            },
            {
                projectImage: eplProject,
                projectHtImage: eplHT,
                projectName: 'EPL Soccer Application',
                projectLink: "https://kglc9.csb.app/",
                projectGit: "https://github.com/alsharifnahas/EPL"
            },
            {
                projectImage: hospitalProject,
                projectHtImage: hospitalHT,
                projectName: 'Hospital Management',
                projectLink: "",
                projectGit: "https://github.com/alsharifnahas/Hospital_Management"
            },
            {
                projectImage: radwaProject,
                projectHtImage: radwaHT,
                projectName: 'Radwa Company Website',
                projectLink: "",
                projectGit: ""
            }


        ]


        return (
            projects.map((project) => (
                <div className={styles.projectContent} >
                    <div className={styles.projectName}>
                        <i className="fa fa-angle-double-right"></i> {project.projectName}
                    </div>
                    <img className={styles.projectImage} src={project.projectHtImage}
                        onMouseOver={(e) => {
                            e.target.style.transition = '1s';
                            e.target.style.cursor = 'pointer';
                            e.target.src = project.projectImage;
                        }}
                        onMouseOut={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.cursor = 'default';
                            e.target.src = project.projectHtImage;
                        }}
                        onClick={() => { window.open(project.projectLink) }}
                    />
                </div>
            ))

        )
    }
}

export default Images