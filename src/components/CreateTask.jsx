import React, {useState} from 'react';
import {projectPOST} from "../Api";

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
        <form onSubmit={handleSubmit}>
            <label>
                Задача:
            </label>
            <input type={"text"} onChange={(e) => setName(e.target.value)}/>
            <label>
                Описание:
            </label>
            <input type={"text"} onChange={(e) => setTasksDescription(e.target.value)}/>
            <label>
                Срок выполнения до:
            </label>
            <input type={"date"} onChange={(e) => setEnd_date(e.target.value)}/>

            <button type={"submit"}>
                Добавить задачу
            </button>
        </form>
    );
};

export default CreateTask;