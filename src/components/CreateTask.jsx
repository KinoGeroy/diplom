import React, {useState} from 'react';
import {projectPOST} from "../Api";
import ConfirmButton from "./ConfirmButton";

const CreateTask = (url) => {
    const [name, setName] = useState('');
    const [taskDescription, setTasksDescription] = useState('');
    const [end_date, setEnd_date] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            taskDescription,
            end_date
        }

        projectPOST(url, data).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handleSubmit} className={'task-list__form'}>
            <h2 className={'task-list__form-title'}>
                Добавить задачу
            </h2>

            <label htmlFor={'task'} className={'task-list__form-label'}>
                Задача:
            </label>
            <input type={"text"} id={'task'} onChange={(e) => setName(e.target.value)} className={'task-list__form-input'}/>

            <label htmlFor={'description'} className={'task-list__form-label'}>
                Описание:
            </label>
            <textarea type={"text"} id={'description'} onChange={(e) => setTasksDescription(e.target.value)} className={'task-list__form-input form-input__textarea'}/>

            <label htmlFor={'date-end'} className={'task-list__form-label'}>
                Срок выполнения до:
            </label>
            <input type={"date"} id={'date-end'} onChange={(e) => setEnd_date(e.target.value)} className={'task-list__form-input'}/>

            <ConfirmButton type={"submit"}>
                Добавить задачу
            </ConfirmButton>
        </form>
    );
};

export default CreateTask;