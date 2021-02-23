import React from 'react';
import styles from '../Style/project.module.css';
import {
    recipeProject, eplProject, codeQuizProject,
    wethearProject,
    generatorProject,
    plannerProject
} from '../assets/Images/index';
import ContentContainer from '../component/ContentContainer/ContentContainer';
import Header from '../component/Header/Header';

const Project = () => {
    const projects = [
        {

            projectImage: recipeProject,
            projectName: 'Recipe Web Application',
            projectLink: "https://alsharifnahas.github.io/recipesapp/.",

        },
        {

            projectImage: eplProject,
            projectName: 'EPL Soccer Application',
            projectLink: "https://alsharifnahas.github.io/EPL/.",

        },
        {

            projectImage: codeQuizProject,
            projectName: 'Coding Quiz',
            projectLink: "https://alsharifnahas.github.io/Code-Quiz/.",

        },
        {

            projectImage: wethearProject,
            projectName: '5-Day Weather Forecast',
            projectLink: "https://alsharifnahas.github.io/Weather-Forecast/.",

        },
        {

            projectImage: generatorProject,
            projectName: 'Password Generator',
            projectLink: "https://alsharifnahas.github.io/Password-Generator/.",

        },
        {

            projectImage: plannerProject,
            projectName: 'Daily Planner',
            projectLink: "https://alsharifnahas.github.io/WorkDay-EventPlanner/.",

        },



    ]
    return (
        <ContentContainer>
            <Header>    <span className={styles.projectTitle}><i id={styles.icon} className="fa fa-angle-double-right"></i>Scroll Down For Projects</span></Header>
            {
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
            }
        </ContentContainer>
    )
}
export default Project;