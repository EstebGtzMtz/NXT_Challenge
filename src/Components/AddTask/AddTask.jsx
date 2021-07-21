import React, { useState } from 'react';

import { createTask } from '../../services/dashboardServices'

import { AddTaskForm } from './AddTask.styles';

const AddTask = () => {
    const token = localStorage.getItem('token');

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const object = {
            name: taskName,
            description: taskDescription,
        }
        await createTask(object, token)
        setTaskName('');
        setTaskDescription('');
    }

    return (
        <AddTaskForm onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder='Task Name' />
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder='Descripcion' />
            <button type="submit" onSubmit={handleSubmit}> Save Task </button>
        </AddTaskForm>
    )
}

export default AddTask
