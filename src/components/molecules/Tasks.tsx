import React, { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';
import Task from '../atoms/Task';


import { TasksProps } from '../../types/Tasks';


const Tasks: React.FC<TasksProps> = ({complete}) => {

    const { tasks } = useContext(TaskContext);

    return (
        <>
            {
                tasks.filter( task => task.complete === complete ).map(task => (
                    <li key={task.id} className='tasks__element'>
                        <Task {...task} />
                    </li>
                ))
            }
        </>
    )
}

export default Tasks;