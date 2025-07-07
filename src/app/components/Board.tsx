'use client';

import { useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./List";
import { Done } from '@mui/icons-material';
import { Cancel } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import { Button, TextField } from "@mui/material";

const initialData = {
    'todo': {
        id: 'todo',
        title: 'To Do',
        tasks: [
            { id: '1', content: 'Buy groceries' },
            { id: '2', content: 'Apply for jobs' }
        ]
    },
    'in-progress': {
        id: 'in-progress',
        title: 'In Progress',
        tasks: []
    },
    'done': {
        id: 'done',
        title: 'Done',
        tasks: []
    }
};



export default function Board() {
    const [boardData, setBoardData] = useState(initialData);
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState('');

    const findNextTaskId = () => {

    }
    const deleteTask = (taskId: string) => {
        setBoardData(prev => {
            const newBoardData: any = { ...prev };

            Object.keys(newBoardData).forEach(columnId => {
                newBoardData[columnId].tasks = newBoardData[columnId].tasks.filter(
                    (task: any) => task.id !== taskId
                )
            })
            return newBoardData;
        })

    }

    const onAddTaskClick = () => {
        // setShowInput(true)
        if (task.trim()) {
            const newId = uuid();
            const newTask = {
                id: newId,
                content: task
            }
            setBoardData(prev => ({
                ...prev,
                todo: {
                    ...prev.todo,
                    tasks: [...prev.todo.tasks, newTask]
                }
            }));

            setTask('');
            setShowInput(false);
        }

    }
    return (
        <div>
            <div className="flex gap-4">
                {Object.values(boardData).map((column) => (
                    <List
                        key={column.id}
                        id={column.id}
                        title={column.title}
                        tasks={column.tasks}
                        onDeleteTask={deleteTask}
                    />
                ))}

            </div>
            {/* <Button variant="outlined" onClick={onAddTaskClick}>Add Task</Button> */}
            {/* {showInput && */}
            <div>
                <TextField id="outlined-basic" label="Add Task" variant="outlined" onChange={(e) => setTask(e.target.value)} value={task} />
                <Fab color="primary" aria-label="add" onClick={onAddTaskClick}>
                    <Done />
                </Fab>
                <Fab color="secondary" aria-label="add" onClick={() => setTask('')}>
                    <Cancel />
                </Fab>
            </div>
            {/* } */}
        </div>
    )
}