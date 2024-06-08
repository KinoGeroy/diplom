import React, {useState} from 'react';
import {projectPost} from "../Api";
import '../styles/NewProject.css';
import ConfirmButton from "./ConfirmButton";

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
        <form onSubmit={handleSubmit} className={'new-project-form'}>
            <label className={'new-project-form_label'} htmlFor={'name'}>
                Название вашего проекта:
            </label>
            <input type={'text'} id={'name'} onChange={(e) => setTitle(e.target.value)} className={'new-project-form_input new-project-form_input-name'}/>
            <label className={'new-project-form_label'} htmlFor={'description'}>
                Описание проекта:
            </label>
            {/*<input type={"text"} id={'description'} onChange={(e) => setProjectDescription(e.target.value)}/>*/}
            <textarea id={'description'} onChange={(e) => setProjectDescription(e.target.value)} className={'new-project-form_input new-project-form_input-description'}/>
            <label className={'new-project-form_label'} htmlFor={'budget'}>
                Бюджет проекта:
            </label>
            <input type={"number"} id={'budget'} onChange={(e) => setBudget(e.target.value)} className={'new-project-form_input'}/>
            <label className={'new-project-form_label'} htmlFor={'name'}>
                Дата окончания:
            </label>
            <input type={"date"} onChange={(e) => setDate(e.target.value)} className={'new-project-form_input'}/>
            <label className={'new-project-form_label'} htmlFor={'tz'}>
                Файл - тз проекта:
            </label>
            <input type={"file"} id={'tz'} onChange={handleFile}/>
            <ConfirmButton type={"submit"} classname={'new-project-form_create-project'}>
                Создать проект
            </ConfirmButton>
        </form>
    );
};
//value={date}
export default NewProject;