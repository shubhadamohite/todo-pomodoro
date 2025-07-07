
'use client';
import { Cancel } from '@mui/icons-material';


interface TaskProps {
    id: string;
    content: string;
    onDelete: (taskId: string) => void;
}

export default function Task({ id, content, onDelete }: TaskProps) {
    return (
        <div
            key={id}
            className="bg-white p-3 rounded shadow-sm border"
        >
            {content}
            <Cancel onClick={() => onDelete(id)} />
        </div>
    )
}