import React, { Component } from 'react'
import {
    hospitalProject, radwaProject, recipeProject, eplProject,
    hospitalHT, eplHT, radwaHT, recipeHT
} from '../Images/index';
import styles from '../Style/project.module.css';
export class Images extends Component {

    render() {


        const projects = [
            {
                projectImage: recipeProject,
                projectHtImage: recipeHT,
                projectName: 'Recipe Web Application',
                projectLink: "https://codesandbox.io/s/inspiring-bassi-4ws2h",

            },
            {
                projectImage: eplProject,
                projectHtImage: eplHT,
                projectName: 'EPL Soccer Application',
                projectLink: "https://codesandbox.io/s/reverent-maxwell-hluqy",

            },
            {
                projectImage: hospitalProject,
                projectHtImage: hospitalHT,
                projectName: 'Hospital Management',
                projectLink: "",

            },
            {
                projectImage: radwaProject,
                projectHtImage: radwaHT,
                projectName: 'Radwa Company Website',
                projectLink: "http://radwachickens.com/test/",

            }


        ]


        return (
            projects.map((project) => (
                <div className={styles.projectContent} >
                    <div className={styles.projectName}>
                        <i className="fa fa-angle-double-right"></i> {project.projectName}
                    </div>
                    <img alt="project" className={styles.projectImage} src={project.projectHtImage}
                        onMouseOver={(e) => {

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
