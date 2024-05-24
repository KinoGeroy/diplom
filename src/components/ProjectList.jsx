import React, {useEffect, useState} from 'react';
import {getProjects} from "../Api";
import NewProject from "./NewProject";
import {NavLink} from "react-router-dom";
import Project from "./Project";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [visible, setVisible] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        getProjects().then((response) => {
            if (response?.data) {
                setProjects(response.data);
                // console.log(response?.data);
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

    const isVisible = () => {
        setVisible(true);
    }

    const handleOpenProject = (project) => {
        setVisible(false);
        setSelectedProject(project);
    }

    return (
        <div>
            {visible &&
                (projects ? (projects.map((project) => (
                    <div key={project.id}>
                        <h2>Название проеткта:</h2>
                        <button type={"button"} onClick={() => {handleOpenProject(project);}}>
                            {project.name}
                        </button>

                        <p>
                            <span>Описание проекта:</span>
                            {project.description}
                        </p>
                        <span> Статус проекта:
                            {projectStatus(project.status_id)}
                        </span>
                    </div>
                ))) : (<NewProject/>))
            }
            {!visible && (
                <>
                    <button type={"button"} onClick={isVisible}>закрыть</button>
                    <Project project={selectedProject}/>
                </>
            )}
            <NewProject/>
        </div>
    );
};
//todo вместо "нет проетов" вставить component
export default ProjectList;