import React, {useEffect, useState} from 'react';
import {getProject, getProjectFile} from "../Api";
import CreateTask from "./CreateTask";

const Project = ({project}) => {
    const [projectData, setProjectData] = useState({});


    useEffect(() => {
        getProject(project.id).then((response) => {
            response?.data ? setProjectData(response.data) : console.log('Нет данных о проекте');
        }).catch(error => {
            console.log(error);
        });
    }, [project]);

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

    const renderTasks = (tasks) => {
        if (tasks) {
            return (
                <div>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <span>Задача - {task.name}</span>
                                <p>Описание задачи: {task.description}</p>
                                <span>Срок выполнения - до {task.end_date}</span>
                            </li>
                        ))}
                    </ul>
                    <CreateTask url={project.id}/>
                </div>
            );
        }
    }

    const handleDownload = () => {
        if (project && project.id) {
            getProjectFile(project.id).then((response) => {
                const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = fileUrl;
                link.setAttribute('download', 'file.jpg');
                document.body.appendChild(link);
                link.click();
                link.remove();
                URL.revokeObjectURL(fileUrl);
            }).catch(error => {
                console.log(error);
            })
        }
    };

    return (
        <div>
            <h2>Название проекта: {projectData.name}</h2>
            <span>Статус проекта - {projectStatus(projectData.status_id)}</span>
            <span> Бюджет - {projectData.budget}</span>
            <p>Описание: {projectData.description}</p>
            <span>Дата завершения - {projectData.end_date}</span>

            <button type={"button"} onClick={handleDownload}>
                Скачать файл
            </button>

            {renderTasks(projectData.tasks)}
        </div>
    );
};

export default Project;