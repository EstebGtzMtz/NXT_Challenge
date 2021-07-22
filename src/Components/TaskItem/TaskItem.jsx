import React from 'react';

import { TodoItem } from './TaskItem.styles';
import { useToast } from "@chakra-ui/react"

import { deleteTask, taskToComplete, taskAborted } from '../../services/dashboardServices';

const TaskItem = ({ toDo }) => {
    const toast = useToast();
    const token = localStorage.getItem('token');

    const handleDeleteTask = async () => {
        try {
            await deleteTask(toDo._id, token);
            toast({
                title: 'Task successfully deleted',
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "something went wrong",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }

    const handleCompleteTask = async () => {
        if (token !== null) {
            try {
                const { data: { msg } } = await taskToComplete(toDo._id, token);
                toast({
                    title: msg,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } catch (error) {
                console.log(error);
                toast({
                    title: "something went wrong",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    }

    const handleAbortedTask = async () => {
        try {
            const { data: { msg } } = await taskAborted(toDo._id, token);
            toast({
                title: msg,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "something went wrong",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }

    const nameOfClass = (status) => {
        if (status === 'toDo')
            return 'toDo-container'

        if (status === 'aborted')
            return 'aborted-container'

        return 'completed-container'
    }

    return (
        <TodoItem>
            <div className={nameOfClass(toDo.status)}>
                <h1>{toDo.name.toUpperCase()}</h1>
                <h4>{toDo.description}</h4>
                <h3>sunrise: {toDo.sunrise} hrs</h3>
                <h3>sunset: {toDo.sunset} hrs</h3>
                <div className='action-buttons'>
                    {
                        toDo.status === 'toDo' && (
                            <div>
                                <button onClick={handleCompleteTask} className='complete'>Complete</button>
                                <button onClick={handleAbortedTask} className='aborted'>Abort</button>
                            </div>
                        )
                    }
                    <button onClick={handleDeleteTask} className='delete'>Delete</button>
                </div>
            </div>
        </TodoItem>
    )
}

export default TaskItem
