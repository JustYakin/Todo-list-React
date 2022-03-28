import { Link, useParams } from "react-router-dom";

const Task: React.FC = () => {
    const { taskId } = useParams();
    return (
        <>
            <h1>Task hello {taskId}</h1>
            <Link to="/"> Go to Home Page</Link>
        </>
    )
}

export default Task;