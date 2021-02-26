
import { TaskProps } from './Task';

export interface TaskProviderValue {
    tasks: Array<TaskProps>
    add?: (task: TaskProps) => void
    edit?: (id: string, name: string, complete: boolean) => void
    remove?: (id: string) => void
}


