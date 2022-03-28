import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../redux/actions/actions";

export interface Task {
    "userId": number;
    "id": string;
    "title": string;
    "body": string;
}

interface iProps {
    tasks: Task[];
}

declare type MyType = EventTarget & {
    id: string;
}

const List: React.FC<iProps> = ({ tasks }) => {
    const dispatch = useDispatch();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = ((event.target) as MyType).id;
        dispatch(deletePost(id));
    }
    
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <React.Fragment key={task.id}>
                    <Link to={`task/${task.id}`}>
                        <div>{task.title}</div>
                    </Link>
                    <button id={task.id.toString()} onClick={handleClick}>x</button>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default List;