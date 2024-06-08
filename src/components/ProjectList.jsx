import React, {createContext, useContext, useEffect, useState} from 'react';
import {getProjects} from "../Api";
import NewProject from "./NewProject";
import Project from "../pages/Project";
import '../styles/ProjectsList.css';
import '../styles/ButtonSubmit.css';
import ConfirmButton from "./ConfirmButton";
import {useNavigate} from "react-router-dom";


const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    // const [visible, setVisible] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        getProjects().then((response) => {
            if (response?.data) {
                setProjects(response.data);
            }
        }).catch(error => {
            console.log(error, 'pojList')
        });
    }, []);

    const projectStatus = (id) => {
        switch (id) {
            case 1:
                return 'notStarted';
            case 2:
                return 'inProgress';
            case 3:
                return 'Finished';
        }
    }

    // const isVisible = () => {
    //     setVisible(true);
    // }

    const handleOpenProject = (project) => {
        // setVisible(false);

        setSelectedProject(project);
        navigate('/project', { state: project})
    }

    return (
        <div>
            {
                <div className={'projects-list-title'}>
                    <span className={'project-ul-field'}>Название проеткта</span>
                    <span className={'project-ul-field'}>Описание проекта</span>
                    <span className={'project-ul-field'}>Статус проекта</span>
                </div>
            }

            <ul className={'projects-list'}>
                {
                    projects ? (projects.map((project) => (
                        <li key={project.id} className={'projects-list--project'}>
                            <button type={"button"} onClick={() => {handleOpenProject(project);}} className={'button-submit'}>
                                {project.name}
                            </button>

                            <p className={'project-li-field'}>
                                {project.description}
                            </p>

                            <p className={'project-li-field'}>
                                {projectStatus(project.status_id)}
                            </p>
                        </li>
                    ))) : (<NewProject/>)
                }
            </ul>

            {/*{!visible && (*/}
            {/*    <div>*/}
            {/*        <ConfirmButton type={"button"} onClick={isVisible} classname={'close-list'}>закрыть</ConfirmButton>*/}
            {/*        <Project project={selectedProject}/>*/}
            {/*    </div>*/}
            {/*)}*/}
            <NewProject/>
        </div>
    );
};
//todo вместо "нет проетов" вставить component
export default ProjectList;