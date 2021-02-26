import React, { useContext, useState, useEffect } from 'react';

import ListTitle from '../molecules/ListTitle';
import Tasks from '../molecules/Tasks';

import { TaskContext } from '../../contexts/TaskContext';


import '../../sass/components/tasks.scss';


const ListTasks: React.FC = () => {

    const [existCompleteTask, setExistCompleteTask] = useState(false);

    const { tasks } = useContext(TaskContext);

    useEffect(() => {
        const taskComplete = tasks.some(task => task.complete);
        if (existCompleteTask !== taskComplete) {
            setExistCompleteTask(taskComplete);
        }
    }, [tasks, existCompleteTask])

    return (
        <ul className='tasks'>
            <Tasks complete={false} />
            {
                existCompleteTask && (
                    <>
                        <ListTitle>
                            Completed
                        </ListTitle>
                        <Tasks complete />
                    </>
                )
            }
        </ul>
    )
}

export default ListTasks;