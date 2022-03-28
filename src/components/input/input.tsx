import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../redux/actions/actions";

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {
        dispatch(addPosts([
            {
                userId: 1,
                id: inputValue,
                title: inputValue,
                body: ''
            }
        ]))
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>add</button>
        </div>
    )
}

export default Input;