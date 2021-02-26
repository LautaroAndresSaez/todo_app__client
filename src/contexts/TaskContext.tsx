import React, { createContext, useContext, useEffect, useState } from 'react';

import { TaskProps } from '../types/Task';
import { TaskProviderValue } from '../types/TaskProvider';
import { UserContext } from './UserContext';
import { useFirebase } from '../hooks/useFirebase';
import { useTasks } from '../hooks/useTasks';

export const TaskContext = createContext<TaskProviderValue>({ tasks: [] });

const TaskProvider: React.FC = ({ children }) => {
    //TODO: Cambiar el array por las tareas del usuario logeado
    const value = useTasks([]);

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;
