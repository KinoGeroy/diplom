import React, {useState} from 'react';
import {projectPost} from "../Api";

const NewProject = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [date, setDate] = useState('');
    const [budget, setBudget] = useState(0);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        // const inputData = {
        //     title,
        //     projectDescription,
        //     date,
        //     budget
        // }
        formData.append('title', title);
        formData.append('projectDescription', projectDescription);
        formData.append('date', date);
        formData.append('budget', budget);

        projectPost(formData).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Название вашего проекта:
            </label>
            <input type={"text"} onChange={(e) => setTitle(e.target.value)}/>
            <label>
                Описание проекта:
            </label>
            <input type={"text"} onChange={(e) => setProjectDescription(e.target.value)}/>
            <label>
                Бюджет проекта:
            </label>
            <input type={"number"} onChange={(e) => setBudget(e.target.value)}/>
            <label>
                Дата окончания:
            </label>
            <input type={"date"} onChange={(e) => setDate(e.target.value)}/>
            Файл - тз проекта:
            <input type={"file"} onChange={handleFile}/>
            <button type={"submit"}>
                Создать проект
            </button>
        </form>
    );
};
//value={date}
export default NewProject;