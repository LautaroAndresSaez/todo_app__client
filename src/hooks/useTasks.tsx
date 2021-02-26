import { useEffect, useState } from 'react';

import { TaskProps } from '../types/Task';
import { TaskProviderValue } from '../types/TaskProvider';
import { useFirebase } from './useFirebase';
import { v4 as uuid } from 'uuid';

export const useTasks = (userTasks: Array<TaskProps>): TaskProviderValue => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const { getTasks, updateTask, addTask, deleteTask } = useFirebase();


    useEffect(() => {

        getTasks().then(setTasks)

    }, [getTasks])

    const filterById = (id: string) => tasks.filter(task => task.id !== id)

    const add = (task: TaskProps) => {
        if (!task.id) {
            task.id = uuid();
            addTask(task);
        }
        if (tasks.every(({ id }) => id !== task.id)) {
            setTasks([task, ...tasks])
        }
    }

    const remove = (id: string) => {
        setTasks(filterById(id));
        deleteTask(id);
    }

    const edit = (id: string, name: string, complete: boolean) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.complete = complete
                task.name = name
            }
            return task;
        }))
        updateTask({ id, name, complete })

    }

    return {
        tasks,
        add,
        remove,
        edit
    }
}

