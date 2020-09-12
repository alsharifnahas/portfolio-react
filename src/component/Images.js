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
                projectName: 'Recipe Web Application',
                projectLink: "https://codesandbox.io/s/inspiring-bassi-4ws2h",

            },
            {

                projectImage: eplProject,
                projectName: 'EPL Soccer Application',
                projectLink: "https://codesandbox.io/s/reverent-maxwell-hluqy",

            },
            {

                projectImage: hospitalProject,
                projectName: 'Hospital Management',
                projectLink: "",

            },
            {

                projectImage: radwaProject,
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
                    <img alt="project" className={styles.projectImage} src={project.projectImage}
                        onMouseOver={(e) => {

                            e.target.style.cursor = 'pointer';
                            e.target.style.filter = 'brightness(90%)';




                        }}
                        onMouseOut={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.cursor = 'default';
                            e.target.style.filter = 'grayscale(100%)'

                        }}
                        onClick={() => { window.open(project.projectLink) }}
                    />

                </div>
            ))

        )
    }
}

export default Images
