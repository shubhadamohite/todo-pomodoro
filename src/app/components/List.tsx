'use client';
import Task from "./Task";

interface Task {
    id: string;
    content: string;
}

interface ListProps {
    id: string;
    title: string;
    tasks: Task[];
    onDeleteTask: (taskId: string) => void;
}

export default function List({ title, tasks, onDeleteTask }: ListProps) {

    return (
        <div className="bg-gray-100 p-4 rounded-lg min-w-64">
            <h3 className="font-semibold text-lg mb-3">{title}</h3>
            <div className="space-y-2">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        onDelete={onDeleteTask}
                    />
                ))}
            </div>
        </div>
    )
}