import { Task } from "../../components/list/list";
import { ADD_POSTS, DELETE_POST } from "../actions/actions";

const initialState = {
    posts: [],
    length: 0
}

interface action {
    type: string;
    payload: any;
}

const postsReducer = (state = initialState, action: action) => {
     switch(action.type) {
        case ADD_POSTS:
            return {
            ...state,
            posts: [state.posts, action.payload].flat()
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((item: Task) => item.id !== action.payload)
            }
        default: return state;
    }
};

export default postsReducer;