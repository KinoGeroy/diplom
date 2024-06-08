import React, {useEffect, useState} from 'react';
import {deleteProject, getProject, getProjectFile} from "../Api";
import CreateTask from "../components/CreateTask";
import '../styles/TaskList.css';
import ConfirmButton from "../components/ConfirmButton";
import NoTasks from "../components/NoTasks";
import {useLocation} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


const Project = () => {
    const [projectData, setProjectData] = useState({});
    const location = useLocation();
    const project = location.state;

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
                <div className={'task-list__render'}>
                    <ul className={'render-tasks'}>
                        {tasks.map((task) => (
                            <li key={task.id} className={'task'}>
                                <span className={'task-name task-field'}>{task.name}</span>
                                <p className={'task-description task-field'}>{task.description}</p>
                                <span className={'task-date task-field'}>{task.end_date}</span>
                                <span className={'task-status task-field'}>{projectStatus(task.status_id)}</span>
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
                const fileUrl = URL.createObjectURL(new Blob([response.data]));
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

    const handleDelete = () => {
        deleteProject(projectData.id).then((response) => {
            console.log('Удалено!')
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div className={'task-list'}>
            <NavigationBar/>
            <h2 className={'task-list__title task-list__field'}>Проект - {projectData.name}</h2>
            <span className={'task-list__field'}>Статус проекта - {projectStatus(projectData.status_id)}</span>
            <span className={'task-list__field'}> Бюджет - {projectData.budget} &#8381;</span>
            <p className={'task-list__description task-list__field'}>Описание: {projectData.description}</p>
            <span className={'task-list__field'}>Дата завершения - {projectData.end_date}</span>

            <div className={'task-list__buttons'}>
                <ConfirmButton type={'button'} onClick={handleDelete}>
                    Удалить проект
                </ConfirmButton>

                <ConfirmButton type={"button"} onClick={handleDownload}>
                    Скачать файл документации
                </ConfirmButton>
            </div>


            {projectData.tasks && projectData.tasks.length ?
                <div className={'render-tasks__titles'}>
                    <span className={'render-tasks__title'}>
                        Задача
                    </span>
                    <span className={'render-tasks__title'}>
                        Описание
                    </span>
                    <span className={'render-tasks__title'}>
                        Срок выполнения
                    </span>
                    <span className={'render-tasks__title'}>
                        Статус проекта
                    </span>
                </div>
                : <NoTasks/>
            }

            {renderTasks(projectData.tasks)}
        </div>
    );
};

export default Project;